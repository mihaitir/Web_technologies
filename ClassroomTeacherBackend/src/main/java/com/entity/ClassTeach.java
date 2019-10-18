
package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ClassTeach")
public class ClassTeach {

	
	@Id
	@GeneratedValue
	private int idClassTeach;
	
	
	private int idClassroom;
	private String idTeacher; //taken from keycloak
	
	
	public ClassTeach(int idClassroom, String idTeacher) {
		super();
		this.idClassroom = idClassroom;
		this.idTeacher = idTeacher;
	}
	public int getIdClassTeach() {
		return idClassTeach;
	}
	public void setIdClassTeach(int idClassTeach) {
		this.idClassTeach = idClassTeach;
	}
	public int getIdClassroom() {
		return idClassroom;
	}
	public void setIdClassroom(int idClassroom) {
		this.idClassroom = idClassroom;
	}
	public String getIdTeacher() {
		return idTeacher;
	}
	public void setIdTeacher(String idTeacher) {
		this.idTeacher = idTeacher;
	}
	public ClassTeach(int idClassTeach, int idClassroom, String idTeacher) {
		super();
		this.idClassTeach = idClassTeach;
		this.idClassroom = idClassroom;
		this.idTeacher = idTeacher;
	}
	public ClassTeach() {
		super();
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idClassTeach;
		result = prime * result + idClassroom;
		result = prime * result + ((idTeacher == null) ? 0 : idTeacher.hashCode());
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
		ClassTeach other = (ClassTeach) obj;
		if (idClassTeach != other.idClassTeach)
			return false;
		if (idClassroom != other.idClassroom)
			return false;
		if (idTeacher == null) {
			if (other.idTeacher != null)
				return false;
		} else if (!idTeacher.equals(other.idTeacher))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "ClassTeach [idClassTeach=" + idClassTeach + ", idClassroom=" + idClassroom + ", idTeacher=" + idTeacher
				+ "]";
	}
	
	 
}
