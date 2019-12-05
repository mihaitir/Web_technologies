package com.controllers;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.client.HttpClientErrorException;

import com.entity.Test;
import com.repository.ITestRepository;

@RestController
@CrossOrigin
public class TestControllers {

	@Autowired
	ITestRepository iTestRepository;

	@PostMapping("/test")
	public ResponseEntity<Test> addTest(@RequestBody Test test) {
		Test t = iTestRepository.save(test);
		return new ResponseEntity<Test>(t,HttpStatus.CREATED);
	}

	@GetMapping(value="/test/{idTest}")
	public ResponseEntity<Test> getTestById(@PathVariable Integer idTest) {
		try {

			Test t = this.iTestRepository.getOne(idTest);
			return new ResponseEntity<Test>(t, HttpStatus.OK);
		} catch (HttpClientErrorException httpcer) {
			System.out.println(httpcer.getMessage());
			return new ResponseEntity<>(httpcer.getStatusCode());
		}

	}
	
	@GetMapping(value="/test")
	public ResponseEntity<List<Test>> getAllTest(){
		return new ResponseEntity<List<Test>>(this.iTestRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping(value="/test/byClassroom/{idClassroom}")
	public ResponseEntity<List<Test>> getAllTestFromClassroom(@PathVariable Integer idClassroom) {
		return new ResponseEntity<>(iTestRepository.findTestByIdClassroom(idClassroom), HttpStatus.OK);
	}

	@DeleteMapping("/test/{idTest}")
	public ResponseEntity<?> deleteTestById(@PathVariable int idTest) {
		iTestRepository.deleteById(idTest);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
