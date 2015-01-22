package ReferenceProject.backend.beans;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import ReferenceProject.backend.Config;
import ReferenceProject.backend.Utils;
import ReferenceProject.backend.datatypes.InternalIdWrapper;
import ReferenceProject.backend.entities.WorkflowState;

@Stateless
public class WorkflowStateBean {
	
	@PersistenceContext(unitName = "ReferenceProject.backend")
    EntityManager em;
	
	/*
	 * Default logic to get and set Complaint entities
	 */
	
	
	public List<WorkflowState> getAllWorkflowStates(String app){
		List<WorkflowState> states = new ArrayList<WorkflowState>();
		if(app.equals("")){
			TypedQuery<WorkflowState> query = em.createQuery("SELECT ws FROM WorkflowState ws", WorkflowState.class);
			states = query.getResultList();
		}
		else{
			String[] wfes = Config.apps.get(app);

			for(String s:wfes)
			{
				TypedQuery<WorkflowState> query = em.createQuery("SELECT ws FROM WorkflowState ws WHERE ws.currentWorkflowElement = :wfe", WorkflowState.class)
					.setParameter("wfe", s);
				states.addAll(query.getResultList());
			}
		}
		return states;
	}
	
	public WorkflowState getWorkflowState(int instanceId){
		return (WorkflowState) em.createQuery("SELECT ws FROM WorkflowState ws WHERE ws.instanceId = :id")
		.setParameter("id", instanceId)
		.getSingleResult();
	}
	
	public List<InternalIdWrapper> createOrUpdateWorkflowStates(List<WorkflowState> workflowStates) {
		ArrayList<InternalIdWrapper> ids = new ArrayList<InternalIdWrapper>();
		
		for(WorkflowState workflowState : workflowStates) {
			workflowState = em.merge(workflowState);
								
			ids.add(new InternalIdWrapper(workflowState.getInternal__id()));
		}
		return ids;
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
