package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "account")
public class Account {

	@Id
	@GeneratedValue
	private int id;
	
	private String username;
	private String password;
	private boolean isTeacher;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean getIsTeacher() {
		return isTeacher;
	}
	public void setIsTeacher(boolean isTeacher) {
		this.isTeacher = isTeacher;
	}
	
	public Account() {
		super();
	}
	
	public Account(int id, String username, String password, boolean isTeacher) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.isTeacher = isTeacher;
	}
	@Override
	public String toString() {
		return "Account [id=" + id + ", username=" + username + ", password=" + password + ", isTeacher=" + isTeacher
				+ "]";
	}
	
	
	
	
}
