package CurrentStateProject.backend.entities.models;

import javax.xml.bind.annotation.XmlEnumValue;

public enum ComplaintStatus {
	
	@XmlEnumValue("VALUE0") VALUE0("User is filling out complaint"),
	@XmlEnumValue("VALUE1") VALUE1("Complaint is sent to administration"),
	@XmlEnumValue("VALUE2") VALUE2("Complaint is in process"),
	@XmlEnumValue("VALUE3") VALUE3("Complaint has been handled by the administration");
	
	private String value;
	
	ComplaintStatus(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}
	
}
