package ReferenceProject.backend.beans;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import ReferenceProject.backend.Config;
import ReferenceProject.backend.Utils;
import ReferenceProject.backend.entities.WorkflowState;

@Stateless
public class WorkflowStateBean {
	
	@PersistenceContext(unitName = "ReferenceProject.backend")
    EntityManager em;
	@EJB
	ComplaintBean complaintBean;
	
	/*
	 * Default logic to get and set Complaint entities
	 */
	
	
	public List<WorkflowState> getAllWorkflowStates(String app){
		List<WorkflowState> states = new ArrayList<WorkflowState>();
		if(app == null || app.equals("")){
			TypedQuery<WorkflowState> query = em.createQuery("SELECT ws FROM WorkflowState ws", WorkflowState.class);
			return query.getResultList();
		}
		
		// app name was set:
		String[] wfes = Config.APP_WORKFLOWELEMENT_RELATIONSHIP.get(app);

		for(String s:wfes)
		{
			TypedQuery<WorkflowState> query = em.createQuery("SELECT ws FROM WorkflowState ws WHERE ws.currentWorkflowElement = :wfe", WorkflowState.class)
				.setParameter("wfe", s);
			states.addAll(query.getResultList());
		}
	
		return states;
	}
	
	public WorkflowState getWorkflowState(String instanceId){
		TypedQuery<WorkflowState> query = em.createQuery("SELECT ws FROM WorkflowState ws WHERE ws.instanceId = :id", WorkflowState.class)
				.setParameter("id", instanceId);
		List<WorkflowState> states = query.getResultList();
		//(WorkflowState) em.createQuery("SELECT ws FROM WorkflowState ws WHERE ws.instanceId = :id")
				//.getSingleResult();
		
		return (states.size() > 0) ? states.get(0) : null;
	}
	
//	public List<InternalIdWrapper> createOrUpdateWorkflowStates(List<WorkflowState> workflowStates) {
//		ArrayList<InternalIdWrapper> ids = new ArrayList<InternalIdWrapper>();
//		
//		for(WorkflowState workflowState : workflowStates) {
//			workflowState = em.merge(workflowState);
//								
//			ids.add(new InternalIdWrapper(workflowState.getInternal__id()));
//		}
//		return ids;
//	}
	/**
	 * Creates a new workflowState if it does not exist yet.
	 * Otherwise, the current workflowState is updated.
	 * @param lastEventFired
	 * @param instanceId
	 * @param wfe the current workflowElement
	 * @return current workflowState
	 */
	public WorkflowState createOrUpdateWorkflowState(String lastEventFired, String instanceId, String wfe){
		
		HashMap<String, String> eventSuccessorMap = Config.WORKFLOWELEMENT_EVENT_SUCCESSION.get(wfe);
		if (eventSuccessorMap == null) {
			throw new RuntimeException("No events are registered for the workflow element " + wfe + ".");
		}
		
		String succeedingWfe = eventSuccessorMap.get(lastEventFired);
		if (succeedingWfe == null) {
			throw new RuntimeException("The event " + lastEventFired + " is not registered for the workflow element " + wfe + ".");
		}
		
		WorkflowState ws = getWorkflowState(instanceId);
		if(ws == null){
			WorkflowState workflowState = new WorkflowState(lastEventFired, instanceId, succeedingWfe);
			em.persist(workflowState);
		}
		else {
			// set to succeeding workflow element -- i.e. describe, what status the instance is in now.
			ws.setCurrentWorkflowElement(succeedingWfe);
			ws.setLastEventFired(lastEventFired); // in fact, this information is useless, but probably nice for display :)
			
			em.merge(ws);
		}
//		WorkflowState workflowState = new WorkflowState(lastEventFired, instanceId, complaint, wfe);
//		em.merge(workflowState);
		return ws;
	}
	
	public boolean deleteWorkflowStates(List<Integer> ids) {
		
		Long count = em.createQuery("SELECT COUNT(t) FROM WorkflowState t WHERE t.__internalId IN :ids", Long.class)
			.setParameter("ids", ids)
			.getSingleResult();
		
		if(count == ids.size()) {
			em.createQuery("DELETE FROM WorkflowState t WHERE t.__internalId IN :ids")
				.setParameter("ids", ids)
				.executeUpdate();
			return true;
		} else {
			return false;
		}
	}
}
