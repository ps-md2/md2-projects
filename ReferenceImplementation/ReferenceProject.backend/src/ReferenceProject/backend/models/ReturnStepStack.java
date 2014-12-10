package ReferenceProject.backend.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class ReturnStepStack implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotNull
	@Column(name="INTERNAL_ID__")
	@XmlElement
	protected int __internalId;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String returnStep;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String returnAndReverseStep;
	
	@NotNull
	@XmlElement(nillable=true)
	protected String returnAndProceedStep;
	
	@NotNull
	@ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@XmlElement(nillable=true)
	protected ReturnStepStack tail;
	
	
	///////////////////////////////////////
	/// Getters and setters
	///////////////////////////////////////
	
	public int getInternal__id() {
		return __internalId;
	}
	
	public String getReturnStep() {
		return returnStep;
	}
	
	public void setReturnStep(String returnStep) {
		this.returnStep = returnStep;
	}
	
	public String getReturnAndReverseStep() {
		return returnAndReverseStep;
	}
	
	public void setReturnAndReverseStep(String returnAndReverseStep) {
		this.returnAndReverseStep = returnAndReverseStep;
	}
	
	public String getReturnAndProceedStep() {
		return returnAndProceedStep;
	}
	
	public void setReturnAndProceedStep(String returnAndProceedStep) {
		this.returnAndProceedStep = returnAndProceedStep;
	}
	
	public ReturnStepStack getTail() {
		return tail;
	}
	
	public void setTail(ReturnStepStack tail) {
		this.tail = tail;
	}
	
}
