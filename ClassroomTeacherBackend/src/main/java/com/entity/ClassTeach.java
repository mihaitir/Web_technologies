
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
	private int idTeacher;
	
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
	public int getIdTeacher() {
		return idTeacher;
	}
	public void setIdTeacher(int idTeacher) {
		this.idTeacher = idTeacher;
	}
	public ClassTeach() {
		super();
	}
	public ClassTeach(int idClassTeach, int idClassroom, int idTeacher) {
		super();
		this.idClassTeach = idClassTeach;
		this.idClassroom = idClassroom;
		this.idTeacher = idTeacher;
	}
	
	
	public ClassTeach(int idClassroom, int idTeacher) {
		super();
		this.idClassroom = idClassroom;
		this.idTeacher = idTeacher;
	}
	@Override
	public String toString() {
		return "ClassTeach [idClassTeach=" + idClassTeach + ", idClassroom=" + idClassroom + ", idTeacher=" + idTeacher
				+ "]";
	}

	
	
	
	
	 
}
