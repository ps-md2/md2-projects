package ReferenceProject.backend.models;

import javax.xml.bind.annotation.XmlEnumValue;

public enum ComplaintStatus {
	
	@XmlEnumValue("0") VALUE0("User is filling out complaint"),
	@XmlEnumValue("1") VALUE1("Complaint is sent to administration"),
	@XmlEnumValue("2") VALUE2("Complaint is in process"),
	@XmlEnumValue("3") VALUE3("Complaint has been handled by the administration");
	
	private String value;
	
	ComplaintStatus(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}
	
}
