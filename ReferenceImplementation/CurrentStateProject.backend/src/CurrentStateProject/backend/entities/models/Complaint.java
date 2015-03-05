package CurrentStateProject.backend.entities.models;

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
public class Complaint implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotNull
	@Column(name="INTERNAL_ID__")
	@XmlElement
	protected int __internalId;
	
	@NotNull
	@ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@XmlElement(nillable=true)
	protected Address loc;
	
	@XmlElement(nillable=true)
	protected String descriptions;
	
	@XmlElement(nillable=true)
	private String picture;
	
	@XmlElement(nillable=true)
	protected String feedback;
	
	@NotNull
	@XmlElement(nillable=true)
	protected ComplaintStatus status;
	
	
	///////////////////////////////////////
	/// Getters and setters
	///////////////////////////////////////
	
	public int getInternal__id() {
		return __internalId;
	}
	
	public Address getLoc() {
		return loc;
	}
	
	public void setLoc(Address loc) {
		this.loc = loc;
	}
	
	public String getDescriptions() {
		return descriptions;
	}
	
	public void setDescriptions(String descriptions) {
		this.descriptions = descriptions;
	}
	
	public String getFeedback() {
		return feedback;
	}
	
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	public ComplaintStatus getStatus() {
		return status;
	}
	
	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
}
