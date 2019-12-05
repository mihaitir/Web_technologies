package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Question;
import com.repository.IQuestionRepository;

@RestController
@CrossOrigin
public class QuestionController {

	@Autowired
	IQuestionRepository iQuestionRepository;
	
	
	@PostMapping("/question")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question){
		Question q = iQuestionRepository.save(question);
		return new ResponseEntity<Question>(q,HttpStatus.CREATED);	
	}
	
	@GetMapping("/question/{idTest}")
	public ResponseEntity<List<Question>> getAllQuestionsByTestId(@PathVariable Integer idTest){
		return null;	
	}
	
	@GetMapping("/question")
	public ResponseEntity<List<Question>> getAllQuestions(){
		return new ResponseEntity<List<Question>>(iQuestionRepository.findAll(), HttpStatus.OK);
	}
}
