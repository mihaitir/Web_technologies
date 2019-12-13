package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.ClassTeach;

@Repository
public interface IClassTeachRepository extends JpaRepository<ClassTeach, Integer>{

	
	@Query("SELECT ct FROM ClassTeach ct WHERE ct.idTeacher = ?1")
	List<ClassTeach> findClassTeachByIdTeacher(Integer idTeacher);
}