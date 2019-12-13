package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.*;

@Repository
public interface IStudentRepository extends JpaRepository<Student, Integer> {
	

	@Query("SELECT s FROM Student s WHERE s.name = ?1")
	Student findByName(String name);
}
