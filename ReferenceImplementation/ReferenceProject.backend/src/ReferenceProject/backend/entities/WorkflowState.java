package ReferenceProject.backend.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import ReferenceProject.backend.entities.models.Complaint;

@Entity
@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class WorkflowState implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotNull
	@Column(name="INTERNAL_ID__")
	@XmlElement
	protected int __internalId;
	
	@Column(unique=true)
	@NotNull
	@XmlElement(nillable=true)
	protected int instanceId;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String currentWorkflowElement;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String lastEventFired; //TODO: Really necessary?
	
	@OneToOne
	protected Complaint complaint;
	///////////////////////////////////////
	/// constructor
	///////////////////////////////////////
	
	public WorkflowState(){
		
	}
	public WorkflowState (String lastEventFired, Integer instanceId, String wfe) {
		this.instanceId = instanceId;
		//this.complaint = complaint;
		this.lastEventFired = lastEventFired;
		this.currentWorkflowElement = wfe;
	}
	
	///////////////////////////////////////
	/// Getters and setters
	///////////////////////////////////////

	public int getInternal__id() {
		return __internalId;
	}
	
	public int get_instanceId() {
		return instanceId;
	}

	public String getCurrentWorkflowElement() {
		return currentWorkflowElement;
	}
	
	public void setCurrentWorkflowElement(String currentWorkflowElement) {
		this.currentWorkflowElement = currentWorkflowElement;
	}
	
	public String getLastEventFired() {
		return lastEventFired;
	}
	
	public void setLastEventFired(String lastEventFired) {
		this.lastEventFired = lastEventFired;
	}
	
	/*public Complaint getComplaint() {
		return complaint;
	}

	public void setComplaint(Complaint complaint) {
		this.complaint = complaint;
	}*/
	
}
