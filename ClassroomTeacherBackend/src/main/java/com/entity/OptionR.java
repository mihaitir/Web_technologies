package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="optionr")
public class OptionR {
	
	@Id
	@GeneratedValue
	private int idOption;
	private String name;
	private int idQuestion;
	
	private boolean isCorrect;
	
	
	public boolean getIsCorrect() {
		return isCorrect;
	}
	public void setIsCorrect(boolean isCorrect) {
		this.isCorrect = isCorrect;
	}
	public int getIdQuestion() {
		return idQuestion;
	}
	public void setIdQuestion(int idQuestion) {
		this.idQuestion = idQuestion;
	}
	
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

	public OptionR(int idOption, String name, boolean typeOption) {
		super();
		this.idOption = idOption;
		this.name = name;

	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idOption;
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
		OptionR other = (OptionR) obj;
		if (idOption != other.idOption)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	public OptionR() {
		super();
	}
	
	
}