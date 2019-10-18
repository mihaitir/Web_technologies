package com.entity;

import java.util.Set;

/**
 * @author mihai
 */
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "classroom")
public class Classroom {

	@Id
	@GeneratedValue
	private int idClassroom;
	private String name;
	private String key;

	public Classroom(int id, String name, String key) {
		super();
		this.idClassroom = id;
		this.name = name;
		this.key = key;
	}

	public int getIdClassroom() {
		return idClassroom;
	}

	public void setIdClassroom(int id) {
		this.idClassroom = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public Classroom() {
		super();
	}

	@Override
	public String toString() {
		return "Classroom [id=" + idClassroom + ", name=" + name + ", key=" + key + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idClassroom;
		result = prime * result + ((key == null) ? 0 : key.hashCode());
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
		Classroom other = (Classroom) obj;
		if (idClassroom != other.idClassroom)
			return false;
		if (key == null) {
			if (other.key != null)
				return false;
		} else if (!key.equals(other.key))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

}
