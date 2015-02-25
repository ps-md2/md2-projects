/**
 * Should probably be removed to an external project later.
 */

package CurrentStateProject.backend.ws;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import CurrentStateProject.backend.Config;
import CurrentStateProject.backend.entities.DummyValues;


@Path("/externalDummyWS")
@Stateless
public class ExternalDummyService {


	@GET
	@Path("/sum")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@QueryParam("float1") float float1, @QueryParam("float2") float float2,
			@QueryParam("float3") float float3) {
		
		float sum = float1 + float2 + float3;
		
		return Response
				.ok()
				.entity(sum)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();	
	}
	
	
	@POST
	@Path("/sum")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response post(DummyValues values) {
		
		float sum = values.getFloat1() + values.getFloat2() + values.getFloat3();
		
		return Response
				.ok()
				.entity(sum)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();	
	}
}
