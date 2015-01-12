package ReferenceProject.backend.entities.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class ProcessChainControllerState implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotNull
	@Column(name="INTERNAL_ID__")
	@XmlElement
	protected int __internalId;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String currentProcessChainStep;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String lastEventFired;
	
	
	///////////////////////////////////////
	/// Getters and setters
	///////////////////////////////////////
	
	public int getInternal__id() {
		return __internalId;
	}
	
	public String getCurrentProcessChainStep() {
		return currentProcessChainStep;
	}
	
	public void setCurrentProcessChainStep(String currentProcessChainStep) {
		this.currentProcessChainStep = currentProcessChainStep;
	}
	
	public String getLastEventFired() {
		return lastEventFired;
	}
	
	public void setLastEventFired(String lastEventFired) {
		this.lastEventFired = lastEventFired;
	}
	
}
