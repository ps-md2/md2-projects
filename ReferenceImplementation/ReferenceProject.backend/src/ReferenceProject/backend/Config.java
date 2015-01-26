package ReferenceProject.backend;

import java.util.HashMap;
import java.util.List;

import com.google.common.collect.Lists;

/**
 * This class allows to define the current model version as well as all model versions that can be handled by this
 * backend module.
 */
public class Config {
	
	/**
	 * Define a string that represents the current version of the backend model.
	 */
	public final static String MODEL_VERSION = "2.0";
	
	/**
	 * Define a list of all model versions that are supported by this backend implementation
	 * to allow backward compatibility.
	 */
	public final static List<String> SUPPORTED_MODEL_VERSIONS = Lists.newArrayList("2.0");

	public final static HashMap<String, String[]> APP_WORKFLOWELEMENT_RELATIONSHIP = setAppWorkflowElementRelationship();

	public final static HashMap<String, HashMap<String, String>> WORKFLOWELEMENT_EVENT_SUCCESSION = setAppWorkflowElementSuccession();
	
	/**
	 * provides a hashmap for filtering workflowelements by apps
	 * setAppWorkflowElementRelationship : (App) --> (Wfe)*
	 * @return
	 */
	private static HashMap<String,String[]> setAppWorkflowElementRelationship(){
		
		HashMap<String, String[]> map = new HashMap<String, String[]>();
		map.put("Citizenapp", new String[]{"LocationDetection", "Mediacapturing", "SubmitComplaint"});
		map.put("Administrationapp", new String[]{"ProcessComplaint"});
		return map;
	}

	
	/**
	 * Given an event-throwing app and a thrown event, this map knows what workflow element has to follow
	 * setAppWorkflowElementSuccession : (Wfe x Event) --> Wfe
	 * @return
	 */
	private static HashMap<String, HashMap<String, String>> setAppWorkflowElementSuccession() {
		HashMap<String, HashMap<String, String>> map = new HashMap<String, HashMap<String, String>>();
		HashMap<String, String> innerMap;

		// Coming from LocationDetection
		innerMap = new HashMap<String, String>();
		innerMap.put("LocationEvent", "Mediacapturing");
		map.put("LocationDetection", innerMap);
		

		// Coming from Mediacapturing
		innerMap = new HashMap<String, String>();
		innerMap.put("MediacapturedEvent", "SubmitComplaint");
		map.put("Mediacapturing", innerMap);
		
		// Coming from SubmitComplaint
		innerMap = new HashMap<String, String>();
		innerMap.put("SubmitEvent", "ProcessComplaint");
		map.put("SubmitComplaint", innerMap);		
			

		return map;
	}
}
