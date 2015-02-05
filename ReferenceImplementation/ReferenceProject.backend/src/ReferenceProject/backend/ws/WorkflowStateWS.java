package ReferenceProject.backend.ws;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ReferenceProject.backend.Config;
import ReferenceProject.backend.beans.WorkflowStateBean;
import ReferenceProject.backend.entities.WorkflowState;

@Path("/workflowState")
@Stateless
public class WorkflowStateWS {
	
	@EJB
	WorkflowStateBean workflowStateBean;
	
	/**
	 * 
	 * @return all open issues
	 */
	@GET
	@Path("all")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response getAllOpenIssues() {
		
		final List<WorkflowState> workflowStates =
				new ArrayList<WorkflowState>(workflowStateBean.getAllWorkflowStates(""));
			
				
		return Response
				.ok()
				.entity(workflowStates)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	@GET
	@Path("filteredOpenIssues")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response getFilteredOpenIssues(@QueryParam("app") String app) {
		
		final List<WorkflowState> workflowStates =
				new ArrayList<WorkflowState>(workflowStateBean.getAllWorkflowStates(app));
			
				
		return Response
				.ok()
				.entity(workflowStates)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@PathParam("id") String id) {
		final WorkflowState workflowState = workflowStateBean.getWorkflowState(id);
		
		if (workflowState != null) {
			return Response
				.ok()
				.entity(new GenericEntity<WorkflowState>(workflowState) {})
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
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
//	public Response createOrUpdate(List<WorkflowState> workflowStates) {
//		final GenericEntity<List<InternalIdWrapper>> ids =
//				new GenericEntity<List<InternalIdWrapper>>(workflowStateBean.createOrUpdateWorkflowStates(workflowStates)) {};
//		return Response
//				.ok()
//				.entity(ids)
//				.header("MD2-Model-Version", Config.MODEL_VERSION)
//				.build();
//	}
	
}
