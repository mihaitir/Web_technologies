package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ClassStud")
public class ClassStud {
	
	@Id
	@GeneratedValue
	private int idClassStud;

	private int idClassroom;
	private int idStudent;
	public int getIdClassStud() {
		return idClassStud;
	}
	public void setIdClassStud(int idClassStud) {
		this.idClassStud = idClassStud;
	}
	public int getIdClassroom() {
		return idClassroom;
	}
	public void setIdClassroom(int idClassroom) {
		this.idClassroom = idClassroom;
	}
	public int getIdStudent() {
		return idStudent;
	}
	public void setIdStudent(int idStudent) {
		this.idStudent = idStudent;
	}
	public ClassStud(int idClassStud, int idClassroom, int idStudet) {
		super();
		this.idClassStud = idClassStud;
		this.idClassroom = idClassroom;
		this.idStudent = idStudent;
	}
	public ClassStud() {
		super();
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idClassStud;
		result = prime * result + idClassroom;
		result = prime * result + idStudent;
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
		ClassStud other = (ClassStud) obj;
		if (idClassStud != other.idClassStud)
			return false;
		if (idClassroom != other.idClassroom)
			return false;
		if (idStudent != other.idStudent)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "ClassStud [idClassStud=" + idClassStud + ", idClassroom=" + idClassroom + ", idStudet=" + idStudent
				+ "]";
	}
}
