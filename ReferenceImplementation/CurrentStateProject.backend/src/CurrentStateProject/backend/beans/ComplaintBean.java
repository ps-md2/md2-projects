package CurrentStateProject.backend.beans;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import CurrentStateProject.backend.Utils;
import CurrentStateProject.backend.datatypes.InternalIdWrapper;
import CurrentStateProject.backend.entities.models.Complaint;

@Stateless
public class ComplaintBean {
	
	@PersistenceContext(unitName = "CurrentStateProject.backend")
    EntityManager em;
	
	/*
	 * TODO Implement backend logic for the Complaint entity here.
	 * These bean methods should be accessed from the web services.
	 */
	
	
	/*
	 * Default logic to get and set Complaint entities
	 */
	
	public List<Complaint> getAllComplaints(String filter, int limit) {
		TypedQuery<Complaint> query = em.createQuery("SELECT t FROM Complaint t " + Utils.buildWhereParameterFromFilterString(filter), Complaint.class);
		
		if (limit > 0) {
			query.setMaxResults(limit);
		}
		
		return query.getResultList();
	}
	
	public Complaint getComplaint(int id) {
		Complaint complaint = em.find(Complaint.class, id);
		
		return complaint;
	}
	
	public List<Complaint> getComplaints(List<Integer> ids) {
		List<Complaint> result;
		if (ids.size()==1){
			result = new ArrayList<Complaint>();
			result.add(em.find(Complaint.class, ids.get(0)));
		}else{
			result = em.createQuery("SELECT t FROM Complaint t WHERE t.__internalId IN :ids", Complaint.class)
			.setParameter("ids", ids).getResultList();
		}
		
		return result;
	}
	
	public List<InternalIdWrapper> createOrUpdateComplaints(List<Complaint> complaints) {
		ArrayList<InternalIdWrapper> ids = new ArrayList<InternalIdWrapper>();
		
		for(Complaint complaint : complaints) {
			complaint = em.merge(complaint);
								
			ids.add(new InternalIdWrapper(complaint.getInternal__id()));
		}
		return ids;
	}
	
	public boolean deleteComplaints(List<Integer> ids) {
		
		Long count = em.createQuery("SELECT COUNT(t) FROM Complaint t WHERE t.__internalId IN :ids", Long.class)
			.setParameter("ids", ids)
			.getSingleResult();
		
		if(count == ids.size()) {
			em.createQuery("DELETE FROM Complaint t WHERE t.__internalId IN :ids")
				.setParameter("ids", ids)
				.executeUpdate();
			return true;
		} else {
			return false;
		}
	}
}
