package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Student;
import com.repository.IStudentRepository;

@RestController
public class StudentController{

	@Autowired
	IStudentRepository iStudentRepository;
	
	@PostMapping("/student")
	public ResponseEntity<?> saveStudent(@RequestBody Student student){
		this.iStudentRepository.save(student);
	return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/student/{idStudent}")
	public ResponseEntity<Student> getStudentById(@PathVariable Integer idStudent){
		return new  ResponseEntity<Student> (this.iStudentRepository.getOne(idStudent),HttpStatus.OK);
	}
	
	@DeleteMapping("/student/{idStudent}")
	public ResponseEntity<?> deleteStudent(@PathVariable Integer idStudent){
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
