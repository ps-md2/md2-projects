package ReferenceProject.backend.beans;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import ReferenceProject.backend.Utils;
import ReferenceProject.backend.datatypes.InternalIdWrapper;
import ReferenceProject.backend.entities.WorkflowState;
import ReferenceProject.backend.entities.models.Complaint;

@Stateless
public class WorkflowStateBean {
	
	@PersistenceContext(unitName = "ReferenceProject.backend")
    EntityManager em;
	@EJB
	ComplaintBean complaintBean;
	
	/*
	 * Default logic to get and set Complaint entities
	 */
	
	public List<WorkflowState> getAllWorkflowStates(String app, String filter){
		//TypedQuery<WorkflowState> query = em.createQuery("SELECT * FROM WorkflowState ws " + 
		//	Utils.buildWhereParameterFromFilterString(filter), WorkflowState.class);
		TypedQuery<WorkflowState> query = em.createQuery("SELECT ws FROM WorkflowState ws", WorkflowState.class);
		return query.getResultList();
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
	 * creates a new workflow state if it does not exist yet. otherwise the current workflowstate is updated
	 * @param lastEventFired
	 * @param instanceId
	 * @param wfe the current workflowelement
	 * @return current workflowstate
	 */
	public WorkflowState createOrUpdateWorkflowState(String lastEventFired, String instanceId, String wfe){
		
		WorkflowState ws = getWorkflowState(instanceId);
		if(ws == null){
			WorkflowState workflowState = new WorkflowState(lastEventFired, instanceId, wfe);
			em.persist(workflowState);
		}
		else {
			ws.setCurrentWorkflowElement(wfe);
			ws.setLastEventFired(lastEventFired);
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
