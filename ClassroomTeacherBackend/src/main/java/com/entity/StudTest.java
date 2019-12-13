package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="StudTest")
public class StudTest {

	@Id
	@GeneratedValue
	private int idStudTest;
	
	private int idStudent;
	private int idTest;
	private int idClassroom;
	private int score;
	
	
	public StudTest(int idStudTest, int idStudent, int idTest, int idClassroom, int score, boolean done) {
		super();
		this.idStudTest = idStudTest;
		this.idStudent = idStudent;
		this.idTest = idTest;
		this.idClassroom = idClassroom;
		this.score = score;
		this.done = done;
	}
	public int getIdClassroom() {
		return idClassroom;
	}
	public void setIdClassroom(int idClassroom) {
		this.idClassroom = idClassroom;
	}
	private boolean done;
	public int getIdStudTest() {
		return idStudTest;
	}
	public void setIdStudTest(int idStudTest) {
		this.idStudTest = idStudTest;
	}
	
	public int getIdStudent() {
		return idStudent;
	}
	public void setIdStudent(int idStudent) {
		this.idStudent = idStudent;
	}
	public int getIdTest() {
		return idTest;
	}
	public void setIdTest(int idTest) {
		this.idTest = idTest;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public boolean getDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public StudTest(int idStudTest, int idStudent, int idTest, int score, boolean done) {
		super();
		this.idStudTest = idStudTest;
		this.idStudent = idStudent;
		this.idTest = idTest;
		this.score = score;
		this.done = done;
	}
	public StudTest() {
		super();
	}
	
	
}
