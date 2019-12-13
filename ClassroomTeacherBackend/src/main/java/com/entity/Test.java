package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="test")
public class Test {
	
	@Id
	@GeneratedValue
	private int idTest;
	private String name;
	private int idClassroom;
	
	//private score [0..10]
	//private done true/false
	
	public int getIdClassroom() {
		return idClassroom;
	}

	public void setIdClassroom(int idClassroom) {
		this.idClassroom = idClassroom;
	}

	public Test(int idTest, String name, int idClassroom) {
		super();
		this.idTest = idTest;
		this.name = name;
		this.idClassroom = idClassroom;
	}

	public int getIdTest() {
		return idTest;
	}

	public void setIdTest(int id) {
		this.idTest = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Test(int id, String name) {
		super();
		this.idTest = id;
		this.name = name;
	}

	public Test() {
		super();
	}

	@Override
	public String toString() {
		return "Test [id=" + idTest + ", name=" + name + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idTest;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Test other = (Test) obj;
		if (idTest != other.idTest)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	

}
