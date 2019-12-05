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

import com.entity.OptionR;
import com.repository.IOptionRepository;

@RestController
@CrossOrigin
public class OptionController {
	
	@Autowired
	IOptionRepository iOptionRepository;
	
	@GetMapping("/options")
	public ResponseEntity<List<OptionR>> getAllOptions(){
		return new ResponseEntity<>(iOptionRepository.findAll(), HttpStatus.OK);	
	}
	
	@GetMapping("/option/{idOption}")
	public ResponseEntity<OptionR> getOptionById(@PathVariable Integer idOption){
		OptionR o = this.iOptionRepository.getOne(idOption);
		return new ResponseEntity<OptionR>(o,HttpStatus.OK);
	}

	@PostMapping("/option")
	public ResponseEntity<?> addOption(@RequestBody OptionR option){
		iOptionRepository.save(option);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/option/delete/{idOption}")
	public ResponseEntity<?> deleteOption(@PathVariable int idOption){
		iOptionRepository.deleteById(idOption);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
}
