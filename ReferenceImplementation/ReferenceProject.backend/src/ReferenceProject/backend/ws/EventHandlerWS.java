package ReferenceProject.backend.ws;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
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
import ReferenceProject.backend.beans.WorkflowStateBean;
import ReferenceProject.backend.datatypes.InternalIdWrapper;
import ReferenceProject.backend.entities.WorkflowState;
import ReferenceProject.backend.entities.models.Complaint;

@Path("/eventHandler")
@Stateless
public class EventHandlerWS {
	
	@EJB
	WorkflowStateBean workflowStateBean;
	@EJB
	ComplaintBean complaintBean;
	

	
	/**
	 * Receives workflowInstanceId, lastEventFired and the current workflowElement and starts their persistence.
	 */
	
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response createOrUpdate(@FormParam("instanceId") String id, @FormParam("lastEventFired") String event,
			@FormParam("currentWfe") String wfe) {

		workflowStateBean.createOrUpdateWorkflowState(event, id, wfe);
				
		return Response
				.ok()
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
//	@DELETE
//	public Response delete(@QueryParam("id") List<Integer> ids) {
//		if (workflowStateBean.deleteWorkflowStates(ids)) {
//			return Response
//				.noContent()
//				.header("MD2-Model-Version", Config.MODEL_VERSION)
//				.build();
//		} else {
//			return Response
//				.status(409)
//				.header("MD2-Model-Version", Config.MODEL_VERSION)
//				.build();
//		}
//	}
	
	/**
	 * Workaround for ESRI proxy that forwards DELETE requests as GET requests!
	 */
//	@GET
//	@Path("delete")
//	public Response deleteWithGet(@QueryParam("id") List<Integer> ids) {
//		return delete(ids);
//	}
	
}
