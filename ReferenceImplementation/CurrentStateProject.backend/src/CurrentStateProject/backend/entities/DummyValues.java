package CurrentStateProject.backend.entities;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DummyValues {

	@XmlElement
	protected float float1;
	
	@XmlElement
	protected float float2;
	
	@XmlElement
	protected float float3;

	public float getFloat1() {
		return float1;
	}

	public void setFloat1(float float1) {
		this.float1 = float1;
	}

	public float getFloat2() {
		return float2;
	}

	public void setFloat2(float float2) {
		this.float2 = float2;
	}

	public float getFloat3() {
		return float3;
	}

	public void setFloat3(float float3) {
		this.float3 = float3;
	}	
}
