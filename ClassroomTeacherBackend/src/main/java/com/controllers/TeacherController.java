package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Teacher;
import com.repository.ITeacherRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TeacherController {

	@Autowired
	ITeacherRepository iTeacherRepository;
	
	@PostMapping("/add/teacher")
	public ResponseEntity<?> createTeacher(@RequestBody Teacher teacher){
		iTeacherRepository.save(teacher);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@GetMapping("/teacher/{idTeacher}")
	public ResponseEntity<Teacher> getTeacherById(@PathVariable int idTeacher){
		Teacher teacher = iTeacherRepository.findById(idTeacher).get();
		return new ResponseEntity<Teacher>(teacher, HttpStatus.FOUND);
	}
	
	@DeleteMapping("/teacher/{idTeacher}")
	public ResponseEntity<?> deleteTeacher(@PathVariable int idTeacher){
		iTeacherRepository.deleteById(idTeacher);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
