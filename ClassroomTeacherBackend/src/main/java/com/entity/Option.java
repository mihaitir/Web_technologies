package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="varianta")
public class Option {
	
	@Id
	@GeneratedValue
	private int idOption;
	
	private String name;
	private boolean typeOption;
	public int getIdOption() {
		return idOption;
	}
	public void setIdOption(int idOption) {
		this.idOption = idOption;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isTypeOption() {
		return typeOption;
	}
	public void setTypeOption(boolean typeOption) {
		this.typeOption = typeOption;
	}
	public Option(int idOption, String name, boolean typeOption) {
		super();
		this.idOption = idOption;
		this.name = name;
		this.typeOption = typeOption;
	}
	@Override
	public String toString() {
		return "Option [idOption=" + idOption + ", name=" + name + ", typeOption=" + typeOption + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idOption;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + (typeOption ? 1231 : 1237);
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Option other = (Option) obj;
		if (idOption != other.idOption)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (typeOption != other.typeOption)
			return false;
		return true;
	}
	public Option() {
		super();
	}
	
	
}