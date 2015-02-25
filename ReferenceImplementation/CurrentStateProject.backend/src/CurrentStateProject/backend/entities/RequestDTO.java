package CurrentStateProject.backend.entities;

import java.io.Serializable;
import java.util.HashMap;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * The RequestDTO encapsulates all request data that is sent by the client.
 * It can be used to create a corresponding REST request.
 * 
 */

@XmlRootElement
public class RequestDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	/**
	 * Provides all possible HTTP methods.
	 * Can later be extended to support more types.
	 */
	public enum RequestMethod {
		GET, POST, PUT, DELETE
	}
	
	@XmlElement
	protected String url;
	
	@XmlElement
	protected RequestMethod requestMethod;
	
	@XmlElement
	protected HashMap<String, Object> queryParams;
	
	@XmlElement
	protected HashMap<String, Object> body;
	
	
	/* Getter and Setter */
	
	public String getUrl() {
		return url;
	}

	public RequestMethod getRequestMethod() {
		return requestMethod;
	}

	public HashMap<String, Object> getQueryParams() {
		return queryParams;
	}

	public HashMap<String, Object> getBody() {
		return body;
	}
}
