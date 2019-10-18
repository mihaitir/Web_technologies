package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Question;
import com.repository.IQuestionRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class QuestionController {

	@Autowired
	IQuestionRepository iQuestionRepository;
	
	@PostMapping("/question/add")
	public ResponseEntity<?> addQuestion(@RequestBody Question question){
		iQuestionRepository.save(question);
		return new ResponseEntity<>(HttpStatus.CREATED);
		
	}
}
