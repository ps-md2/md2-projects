package ReferenceProject.backend.ws;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ReferenceProject.backend.Config;
import ReferenceProject.backend.beans.ComplaintBean;
import ReferenceProject.backend.datatypes.InternalIdWrapper;
import ReferenceProject.backend.models.Complaint;

@Path("/complaint")
@Stateless
public class ComplaintWS {
	
	@EJB
	ComplaintBean complaintBean;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response getAll(@QueryParam("filter") final String filter, @QueryParam("limit") final int limit) {
		final GenericEntity<List<Complaint>> complaints =
				new GenericEntity<List<Complaint>>(complaintBean.getAllComplaints(filter, limit)) {};
		return Response
				.ok()
				.entity(complaints)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@PathParam("id") Integer id) {
		final Complaint complaint = complaintBean.getComplaint(id);
		
		if (complaint != null) {
			return Response
				.ok()
				.entity(new GenericEntity<Complaint>(complaint) {})
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
	public Response createOrUpdate(List<Complaint> complaints) {
		final GenericEntity<List<InternalIdWrapper>> ids =
				new GenericEntity<List<InternalIdWrapper>>(complaintBean.createOrUpdateComplaints(complaints)) {};
		return Response
				.ok()
				.entity(ids)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	@DELETE
	public Response delete(@QueryParam("id") List<Integer> ids) {
		if (complaintBean.deleteComplaints(ids)) {
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
