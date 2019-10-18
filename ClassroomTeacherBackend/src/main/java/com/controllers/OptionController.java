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
import java.util.List;

import com.entity.Option;
import com.repository.IOptionRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class OptionController {
	
	@Autowired
	IOptionRepository iOptionRepository;
	
	@GetMapping("/options")
	public ResponseEntity<List<Option>> getAllOptions(){
		return new ResponseEntity<>(iOptionRepository.findAll(), HttpStatus.OK);	
	}

	@PostMapping("/option/add")
	public ResponseEntity<?> addOption(@RequestBody Option option){
		iOptionRepository.save(option);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/option/delete/{idOption}")
	public ResponseEntity<?> deleteOption(@PathVariable int idOption){
		iOptionRepository.deleteById(idOption);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
}
