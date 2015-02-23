package CurrentStateProject.backend.beans;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import CurrentStateProject.backend.Utils;
import CurrentStateProject.backend.datatypes.InternalIdWrapper;
import CurrentStateProject.backend.entities.models.Address;

@Stateless
public class AddressBean {
	
	@PersistenceContext(unitName = "CurrentStateProject.backend")
    EntityManager em;
	
	/*
	 * TODO Implement backend logic for the Address entity here.
	 * These bean methods should be accessed from the web services.
	 */
	
	
	/*
	 * Default logic to get and set Address entities
	 */
	
	public List<Address> getAllAddresss(String filter, int limit) {
		TypedQuery<Address> query = em.createQuery("SELECT t FROM Address t " + Utils.buildWhereParameterFromFilterString(filter), Address.class);
		
		if (limit > 0) {
			query.setMaxResults(limit);
		}
		
		return query.getResultList();
	}
	
	public Address getAddress(int id) {
		Address address = em.find(Address.class, id);
		
		return address;
	}
	
	public List<Address> getAddresss(List<Integer> ids) {
		List<Address> result;
		if (ids.size()==1){
			result = new ArrayList<Address>();
			result.add(em.find(Address.class, ids.get(0)));
		}else{
			result = em.createQuery("SELECT t FROM Address t WHERE t.__internalId IN :ids", Address.class)
			.setParameter("ids", ids).getResultList();
		}
		
		return result;
	}
	
	public List<InternalIdWrapper> createOrUpdateAddresss(List<Address> addresss) {
		ArrayList<InternalIdWrapper> ids = new ArrayList<InternalIdWrapper>();
		
		for(Address address : addresss) {
			address = em.merge(address);
								
			ids.add(new InternalIdWrapper(address.getInternal__id()));
		}
		return ids;
	}
	
	public boolean deleteAddresss(List<Integer> ids) {
		
		Long count = em.createQuery("SELECT COUNT(t) FROM Address t WHERE t.__internalId IN :ids", Long.class)
			.setParameter("ids", ids)
			.getSingleResult();
		
		if(count == ids.size()) {
			em.createQuery("DELETE FROM Address t WHERE t.__internalId IN :ids")
				.setParameter("ids", ids)
				.executeUpdate();
			return true;
		} else {
			return false;
		}
	}
}
