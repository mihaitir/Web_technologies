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
import com.entity.Classroom;
import com.repository.IClassroomRepository;
import com.service.ClassroomService;


@RestController
@CrossOrigin
public class ClassroomControllers {

	@Autowired
	ClassroomService classroomService;
	
	@Autowired
	IClassroomRepository iClassroomRepository;

	@GetMapping("/classroom/classes")
	public ResponseEntity<List<Classroom>> getAllClasses() {
		return new ResponseEntity<>(classroomService.iClassroomRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/classroom/classesById/{idClassroom}")
	public ResponseEntity<Classroom> getClassroomById(@PathVariable Integer idClassroom){
		return new ResponseEntity<Classroom>(iClassroomRepository.findById(idClassroom).get(), HttpStatus.OK);
		
	}
	
	@GetMapping("/classroom/classes/{idTeacher}")
	public ResponseEntity<List<Classroom>> getClassroomById(@PathVariable String idTeacher) {
		List<Classroom> classroomList = classroomService.getAllClassroomsForASpecifiedTeacher(idTeacher);
		return new ResponseEntity<List<Classroom>>(classroomList, HttpStatus.OK);
	}

	@PostMapping("/classroom/add/{idTeacher}")
	public ResponseEntity<?> addClassroom(@RequestBody Classroom classroom, @PathVariable String idTeacher) {
		classroomService.iClassroomRepository.save(classroom);
		classroomService.saveThirdTabel(classroom.getIdClassroom(), idTeacher);
		return new ResponseEntity<>(null, HttpStatus.CREATED);
	}

	@DeleteMapping("/classroom/delete/{id}")
	public ResponseEntity<?> deleteCassroomById(@PathVariable int id) {
		this.classroomService.iClassroomRepository.deleteById(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	
	@DeleteMapping("/classroom/delete/all")
	public ResponseEntity<?> deleteAllClassrooms() {
		this.classroomService.iClassroomRepository.deleteAll();
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

}
