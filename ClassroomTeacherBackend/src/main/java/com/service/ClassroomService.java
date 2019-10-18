package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.entity.ClassTeach;
import com.entity.Classroom;
import com.entity.Teacher;
import com.repository.IClassTeachRepository;
import com.repository.IClassroomRepository;

@Service
public class ClassroomService {

	@Autowired
	public IClassroomRepository iClassroomRepository;

	@Autowired
	public IClassTeachRepository iClassTeachRepository;

	public void saveThirdTabel(int IdClassroom, String IdTeacher) {
		this.iClassTeachRepository.save(new ClassTeach(IdClassroom, IdTeacher));

	}

	public List<Classroom> getAllClassroomsForASpecifiedTeacher(String idTeacher) {
		List<ClassTeach> l = iClassTeachRepository.findClassTeachByIdTeacher(idTeacher);
		List<Classroom> classroomList = new ArrayList<Classroom>();
		for (ClassTeach it : l) {
			Classroom c = iClassroomRepository.findById(it.getIdClassroom()).get();
			classroomList.add(c);
		}
		return classroomList;
	}
}
