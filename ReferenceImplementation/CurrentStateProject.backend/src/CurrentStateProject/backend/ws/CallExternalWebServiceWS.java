package CurrentStateProject.backend.ws;

import org.json.simple.JSONValue;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map.Entry;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import CurrentStateProject.backend.Config;
import CurrentStateProject.backend.entities.RequestDTO;
import CurrentStateProject.backend.entities.RequestDTO.RequestMethod;

@Path("/externalWS")
@Stateless
public class CallExternalWebServiceWS {
	
	
	/**
	 * Receives a json-encoded object containing a url, a REST method type and a set of parameters.
	 * Based on this data, a new request is created.
	 * @param dto contains the request data.
	 * @return A response signaling success or failure of the request.
	 */
	@POST
	@Path("/callExternalWS")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public Response getMethod(RequestDTO dto) {
		Boolean responseOk = false;
		int code = 0;
		try {
			URL url;
			RequestMethod type = dto.getRequestMethod();
			
			// Add query parameters to URL
			if(dto.getQueryParams() != null){
				String urlParams = buildUrlParameters(dto.getQueryParams());
				url = new URL(dto.getUrl() + urlParams);
			} else {
				url = new URL(dto.getUrl());
			}

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod(type.toString());
			
			if(type != RequestMethod.GET){
				// Only support JSON-encoded body data
				conn.setRequestProperty("Content-Type", "application/json");
				conn.setDoOutput(true);
				
				// JSON-encode body content
				if(dto.getBody() != null){
					String postParams = JSONValue.toJSONString(dto.getBody());
					OutputStream os = conn.getOutputStream();
					os.write(postParams.getBytes());
					os.flush();
				}
			} else {
				conn.setDoOutput(false);
			}
			
			// Check if request was successful
			code = conn.getResponseCode();
			responseOk = (code == 200);
			
			// TODO: Implement real logging of requests
			printRequestResult(conn);
			
			conn.disconnect();

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		if (responseOk) {
			return Response.ok()
					.header("MD2-Model-Version", Config.MODEL_VERSION).build();
		} else {
			return Response.status(code) // TODO: Change status here
					.header("MD2-Model-Version", Config.MODEL_VERSION).build();
		}
	}
	
	/**
	 * Creates a string containing URL parameters, that can be added to a normal URL.
	 * Example: {"hello": "world", "example": 42} will return '?hello=world&example=42'
	 * @param params a HashMap containing all query parameters
	 * @return a String containing query parameters
	 */
	private String buildUrlParameters(HashMap<String, Object> params){
		String urlParams = "?";

		for (Entry<String, Object> entry : params.entrySet()) {
			urlParams += entry.getKey() + "=" + entry.getValue() + "&";
		}
		// remove trailing "&"
		urlParams = urlParams.substring(0, urlParams.length() - 1);
		return urlParams;
	}
	
	/**
	 * Prints the result of a HttpURLConnection
	 * @param conn the HttpURLConnection
	 * @throws IOException when the inputStream cannot be read
	 */
	private void printRequestResult(HttpURLConnection conn) throws IOException {
		String output;
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
			System.out.println("Output from Server: \n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
		} catch (IOException e) {
			throw e;
		}
	}
}
