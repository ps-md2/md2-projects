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
	protected enum RequestType {
		GET, POST, PUT, DELETE
	}
	
	@XmlElement
	protected String url;
	
	@XmlElement
	protected RequestType requestType;
	
	@XmlElement
	protected HashMap<String, String> params;
	
	
	/* Getter and Setter */
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public RequestType getRequestType() {
		return requestType;
	}

	public void setRequestType(RequestType requestType) {
		this.requestType = requestType;
	}

	public HashMap<String, String> getParams() {
		return params;
	}

	public void setParams(HashMap<String, String> params) {
		this.params = params;
	}
}
