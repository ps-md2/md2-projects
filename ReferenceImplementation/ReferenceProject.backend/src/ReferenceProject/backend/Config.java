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
	
	public final static HashMap<String, String[]> apps = setApps();
	
	/**
	 * provides a hashmap for filtering workflowelements by apps
	 * @return
	 */
	private static HashMap<String,String[]> setApps(){
		
		HashMap<String, String[]> map = new HashMap<String, String[]>();
		map.put("Citizenapp", new String[]{"LocationDetection", "Mediacapturing", "SubmitComplaint"});
		map.put("Administrationapp", new String[]{"ProcessComplaint"});
		return map;
	}
}
