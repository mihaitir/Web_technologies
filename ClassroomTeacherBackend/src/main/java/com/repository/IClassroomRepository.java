package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.Classroom;

@Repository
public interface IClassroomRepository  extends JpaRepository<Classroom,Integer>{


	@Query("SELECT c FROM Classroom c WHERE c.key = ?1")
	Classroom findClassroomByKey(String key);
	
	
}
