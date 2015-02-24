package CurrentStateProject.backend.ws;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import CurrentStateProject.backend.Config;
import CurrentStateProject.backend.beans.ComplaintBean;

@Path("/externalWS")
@Stateless
public class CallExternalWebServiceWS {


	@POST
	@Path("/callExternalWS")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@QueryParam("float1") float float1, @QueryParam("float2") float float2,
			@QueryParam("float3") float float3) {
		
		try {
			
				String params = "float1=" + float1 + "&float2=" + float2 +"&float3=" + float3;
			
			  	URL url = new URL("http://localhost:8080/CurrentStateProject.backend/service/externalDummyWS/sum?"+params);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setDoOutput(true);
				conn.setRequestMethod("GET");
				conn.setRequestProperty("Content-Type", "application/json");

				String input = "[{\"float1\":\""+ float1 +"\","
						+ "\"float2\":\""+ float2 +"\","
						+ "\"float3\":\"" + float3 + "\"}]";

				OutputStream os = conn.getOutputStream();
				os.write(input.getBytes());
				os.flush();
		 
				BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
		 
				String output;
				System.out.println("Output from Server .... \n");
				while ((output = br.readLine()) != null) {
					System.out.println(output);
				}
		 
				conn.disconnect();
		 
			  } catch (MalformedURLException e) {
		 
				e.printStackTrace();
		 
			  } catch (IOException e) {
		 
				e.printStackTrace();
		 
			 }
		  
		
		return Response
			.ok()
			.header("MD2-Model-Version", Config.MODEL_VERSION)
			.build();	
		

	}
	

	/**
	* Possibly needs to be extended by a filter parameter
	*/
	/*@POST
	@Path("ids")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response get(@FormParam("ids") List<Integer> ids) {
		final List<Complaint> complaints = complaintBean.getComplaints(ids);
		
		return Response
				.ok()
				.entity(complaints)
				.header("MD2-Model-Version", Config.MODEL_VERSION)
				.build();
	}
	*/
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
	/*@POST
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

	
	*/
}
