package CurrentStateProject.backend.ws;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.FormParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import CurrentStateProject.backend.Config;
import CurrentStateProject.backend.beans.AddressBean;
import CurrentStateProject.backend.datatypes.InternalIdWrapper;
import CurrentStateProject.backend.entities.models.Address;

@Path("/address")
@Stateless
public class AddressWS {
	
	@EJB
	AddressBean addressBean;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response getAll(@QueryParam("filter") final String filter, @QueryParam("limit") final int limit) {
		final GenericEntity<List<Address>> addresss =
				new GenericEntity<List<Address>>(addressBean.getAllAddresss(filter, limit)) {};
		return Response
				.ok()
				.entity(addresss)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@PathParam("id") Integer id) {
		final Address address = addressBean.getAddress(id);
		
		if (address != null) {
			return Response
				.ok()
				.entity(new GenericEntity<Address>(address) {})
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
		} else {
			return Response
				.status(404)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
		}

	}
	
	/**
	* Possibly needs to be extended by a filter parameter
	*/
	@POST
	@Path("ids")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@FormParam("ids") List<Integer> ids) {
		final List<Address> addresss = addressBean.getAddresss(ids);
		
		return Response
				.ok()
				.entity(addresss)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	/**
	 * Exemplary input format:
	 * [
	 *   {
	 *	   "firstName": "John",
	 *	   "lastName": "Doe",
	 *	   "customerId": "2443232",
	 *     "dateOfBirth": "1954-07-18"
	 *   }
	 * ]
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response createOrUpdate(List<Address> addresss) {
		final GenericEntity<List<InternalIdWrapper>> ids =
				new GenericEntity<List<InternalIdWrapper>>(addressBean.createOrUpdateAddresss(addresss)) {};
		return Response
				.ok()
				.entity(ids)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	@DELETE
	public Response delete(@QueryParam("id") List<Integer> ids) {
		if (addressBean.deleteAddresss(ids)) {
			return Response
				.noContent()
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
		} else {
			return Response
				.status(409)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
		}
	}
	
	/**
	 * Workaround for ESRI proxy that forwards DELETE requests as GET requests!
	 */
	@GET
	@Path("delete")
	public Response deleteWithGet(@QueryParam("id") List<Integer> ids) {
		return delete(ids);
	}
	
}
