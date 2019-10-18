package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.*;

@Repository
public interface IStudentRepository extends JpaRepository<Student, Integer> {
	

}
