package com.controllers;

import java.util.ArrayList;
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

import com.entity.ClassStud;
import com.entity.ClassTeach;
import com.entity.Classroom;
import com.entity.StudTest;
import com.entity.Student;
import com.repository.IClassStudRepository;
import com.repository.IClassroomRepository;
import com.repository.IStudTestRepository;
import com.repository.IStudentRepository;
import com.service.ClassroomService;


@RestController
@CrossOrigin
public class ClassroomControllers {

	@Autowired
	ClassroomService classroomService;
	
	@Autowired
	IClassroomRepository iClassroomRepository;
	
	@Autowired
	IClassStudRepository iClassStudRepository;
	
	@Autowired 
	IStudentRepository iStudentRepository;
	
	@Autowired
	IStudTestRepository iStudTestRepository;

	@GetMapping("/classroom/classes")
	public ResponseEntity<List<Classroom>> getAllClasses() {
		return new ResponseEntity<>(classroomService.iClassroomRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/classroom/classesById/{idClassroom}")
	public ResponseEntity<Classroom> getClassroomByIdClassroom(@PathVariable Integer idClassroom){
		return new ResponseEntity<Classroom>(iClassroomRepository.findById(idClassroom).get(), HttpStatus.OK);
		
	}
	
	@GetMapping("/classroom/classes/{idTeacher}")
	public ResponseEntity<List<Classroom>> getClassroomById(@PathVariable Integer idTeacher) {
		List<Classroom> classroomList = classroomService.getAllClassroomsForASpecifiedTeacher(idTeacher);
		return new ResponseEntity<List<Classroom>>(classroomList, HttpStatus.OK);
	}

	@PostMapping("/classroom/add/{idTeacher}")
	public ResponseEntity<?> addClassroom(@RequestBody Classroom classroom, @PathVariable Integer idTeacher) {
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
	
	@GetMapping("/classroom/clasStud/{idClassroom}")
	public ResponseEntity<List<ClassStud>> getAllClassTeachByClassroom(@PathVariable Integer idClassroom){
		return new ResponseEntity<List<ClassStud>>(this.iClassStudRepository.findClassStudByIdClassroom(idClassroom), HttpStatus.OK);
	}
	
	@GetMapping("/classroom/getStudentsByIdClassroom/{idClassroom}")
	public ResponseEntity<List<Student>> getStudentsByIdClassroom(@PathVariable Integer idClassroom){
		//first we obtain the list with ClassStud where we stored the Student's id
		//and for every entity from that, we get the Student by his id, and push them into a list
		List<Student> l = new ArrayList<Student>();
		
		ArrayList<ClassStud> list = (ArrayList<ClassStud>) this.iClassStudRepository.findClassStudByIdClassroom(idClassroom);
		list.stream().forEach( classStud -> {
			l.add(this.iStudentRepository.findById(classStud.getIdStudent()).get());
		});
		return new ResponseEntity<List<Student>>(l,HttpStatus.OK);
	}
	
	@GetMapping("/classroom/getClassroomByKey/{key}")
	public ResponseEntity<Classroom> findClassroomByKey(@PathVariable String  key){
		return new ResponseEntity<Classroom>(this.iClassroomRepository.findClassroomByKey(key), HttpStatus.OK);
	}	

	@GetMapping("/classroom/classeByStudentId/{idStudent}")
	public ResponseEntity<List<Classroom>> getAllClassesByStudentId(@PathVariable Integer idStudent){
		ArrayList<ClassStud> l = (ArrayList<ClassStud>) this.iClassStudRepository.findClassStudByIdStudent(idStudent);
		ArrayList<Classroom> lClassroom = new ArrayList<Classroom>();
		l.stream().forEach(classStud ->{
			lClassroom.add(this.iClassroomRepository.findById(classStud.getIdClassroom()).get());
		});
			return new ResponseEntity<List<Classroom>>(lClassroom,HttpStatus.OK);
	}	
	
	@PostMapping("/classroom/saveTestResult")
	public ResponseEntity<?> saveTestResult(@RequestBody StudTest studTest) {
		this.iStudTestRepository.save(studTest);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("classroom/getAllStudTestEntity")
	public ResponseEntity<List<StudTest>> getAllStudTestEntity(){
		return new ResponseEntity<List<StudTest>>(this.iStudTestRepository.findAll(), HttpStatus.OK);
	}
	
	@DeleteMapping("classroom/deleteTestHistory")
	public ResponseEntity<?> deleteTestHistory(){
		this.iStudTestRepository.deleteAll();
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("classroom/getTestsResult/{idStudent}/{idTest}")
	public ResponseEntity<StudTest> getTestResult(@PathVariable Integer idStudent, @PathVariable Integer idTest){
		System.out.print(idStudent+" "+ idTest);
		if (this.iStudTestRepository.findByIdStudentAndIdTest(idStudent, idTest).isPresent())
		return new ResponseEntity<StudTest>(this.iStudTestRepository.findByIdStudentAndIdTest(idStudent, idTest).get(),HttpStatus.OK);
			else {
				StudTest empty = new StudTest();
				empty.setIdStudTest(-1);
				return new ResponseEntity<StudTest>(empty, HttpStatus.OK);
			}
	}
	
	
}
