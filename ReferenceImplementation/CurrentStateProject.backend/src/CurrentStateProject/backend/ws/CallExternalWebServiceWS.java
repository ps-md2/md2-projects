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
import CurrentStateProject.backend.entities.RequestDTO.RequestType;

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
		Boolean responseOk = true;
		int code = 0;
		try {
			URL url;
			RequestType type = dto.getRequestType();

			// build URL
			switch (type) {
			case GET:
				String urlParams = buildUrlParameters(dto.getParams());
				url = new URL(dto.getUrl() + urlParams);
				break;
			case POST:
				url = new URL(dto.getUrl());
				break;
			default:
				url = new URL(dto.getUrl());
			}

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod(type.toString());
			conn.setRequestProperty("Content-Type", "application/json");
			
			// Add method-specific options and content
			switch (type) {
			case GET:
				conn.setDoOutput(false);
				break;
			case POST:
				conn.setDoOutput(true);
				
				// JSON-encode parameter HashMap
				String postParams = JSONValue.toJSONString(dto.getParams());
				
				OutputStream os = conn.getOutputStream();
				os.write(postParams.getBytes());
				os.flush();
				break;
			case PUT:
				break;
			case DELETE:
				break;
			default:
				break;
			}

			if (conn.getResponseCode() != 200) {
				responseOk = false;
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));

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

		if (responseOk) {
			return Response.ok()
					.header("MD2-Model-Version", Config.MODEL_VERSION).build();
		} else {
			return Response.status(code) // TODO: Change status here
					.header("MD2-Model-Version", Config.MODEL_VERSION).build();
		}
	}
	
	private String buildUrlParameters(HashMap<String, Object> params){
		String urlParams = "?";

		for (Entry<String, Object> entry : params.entrySet()) {
			urlParams += entry.getKey() + "=" + entry.getValue() + "&";
		}
		// remove trailing "&"
		urlParams = urlParams.substring(0, urlParams.length() - 1);
		return urlParams;
	}
}
