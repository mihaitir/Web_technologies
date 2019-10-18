package com.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;

@Entity
public class Teacher {
	@Id
	@GeneratedValue
	private int idTeacher;

	private String name;
	private String email;
	private String password;

	public Teacher(int idTeacher, String name, String email, String password, Set<Classroom> classroomList) {
		super();
		this.idTeacher = idTeacher;
		this.name = name;
		this.email = email;
		this.password = password;
//		this.classroomList = classroomList;
	}

	public Teacher(int idTeacher) {
		super();
		this.idTeacher = idTeacher;
	}

	public int getIdTeacher() {
		return idTeacher;
	}

	public void setIdTeacher(int idTeacher) {
		this.idTeacher = idTeacher;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Teacher(int idTeacher, String name, String email, String password) {
		super();
		this.idTeacher = idTeacher;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public Teacher() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + idTeacher;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
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
		Teacher other = (Teacher) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (idTeacher != other.idTeacher)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Teacher [idTeacher=" + idTeacher + ", name=" + name + ", email=" + email + ", password=" + password
				+ "]";
	}

}
