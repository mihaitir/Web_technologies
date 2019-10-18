package com.controllers;

import java.util.List;

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

import com.entity.Test;
import com.repository.ITestRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TestControllers {

	@Autowired
	ITestRepository iTestRepository;

	@PostMapping("/test/add")
	public ResponseEntity<?> addTest(@RequestBody Test test) {
		iTestRepository.save(test);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@GetMapping("/test/{idClassroom}")
	public ResponseEntity<List<Test>> getAllTestFromClassroom(@PathVariable int idClassroom) {
		return new ResponseEntity<>(iTestRepository.findTestByIdClassroom(idClassroom), HttpStatus.OK);
	}

	@DeleteMapping("/test/delete/{idTest}")
	public ResponseEntity<?> deleteTestById(@PathVariable int idTest) {
		iTestRepository.deleteById(idTest);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
