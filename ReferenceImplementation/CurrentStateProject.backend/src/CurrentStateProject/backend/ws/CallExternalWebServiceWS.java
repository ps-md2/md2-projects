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
	@Path("/callExternalWSGET")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response getMethod(@QueryParam("float1") float float1, @QueryParam("float2") float float2,
			@QueryParam("float3") float float3) {
		Boolean responseOk = true;
		int code = 0;
		try {
					
				String params = "float1=" + float1 + "&float2=" + float2 +"&float3=" + float3;
			
			  	URL url = new URL("http://localhost:8080/CurrentStateProject.backend/service/externalDummyWS/sum?"+params);  	
			  	HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setDoOutput(true);
				conn.setRequestMethod("GET");
				conn.setRequestProperty("Content-Type", "application/json");

				if(conn.getResponseCode() != 200){
					responseOk = false;
				}
							
				BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
		 
				String output;
				System.out.println("Output from Server .... \n");
				while ((output = br.readLine()) != null) {
					System.out.println(output);
				}
				code = conn.getResponseCode();
				conn.disconnect();
			
		 
			  } catch (MalformedURLException e) {
		 
				e.printStackTrace();
		 
			  } catch (IOException e) {
		 
				e.printStackTrace();
		 
			 }
		  
			if(responseOk){
				return Response
					.ok()
					.header("MD2-Model-Version", Config.MODEL_VERSION)
					.build();	
			}
			else{
				return Response
					.status(code) // TODO: Change status here
					.header("MD2-Model-Version", Config.MODEL_VERSION)
					.build();	
			}

	}
	
	
	@POST
	@Path("/callExternalWSPOST")
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response postMethod(@QueryParam("float1") float float1, @QueryParam("float2") float float2,
			@QueryParam("float3") float float3) {
	  try {
			URL url = new URL("http://localhost:8080/ReferenceProject.backend/service/workflowState/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Content-Type", "application/json");

			String input = "[{\"float1\":\""+ float1 +"\","
					+ "\"float2\":\""+ float2 +"\","
					+ "\"float3\":\"" + float3 + "\"}]";

			OutputStream os = conn.getOutputStream();
			os.write(input.getBytes());
			os.flush();
	 
			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
	 
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

}
	
	
	
	

