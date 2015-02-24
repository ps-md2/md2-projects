/**
 * Should probably be removed to an external project later.
 */

package CurrentStateProject.backend.ws;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import CurrentStateProject.backend.Config;



@Path("/externalDummyWS")
@Stateless
public class ExternalDummyService {


	@GET
	@Path("/sum")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@QueryParam("float1") float float1, @QueryParam("float2") float float2,
			@QueryParam("float3") float float3) {
	
		float sum = float1 + float2 + float3;
		System.out.println("!!!!!!!!!!!!!!!!!!!" + sum);
		
		return Response
				.ok()
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();	
		
	}

	
}
