package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.ClassStud;

@Repository
public interface IClassStudRepository  extends JpaRepository<ClassStud, Integer>{

	@Query("SELECT cs FROM ClassStud cs WHERE cs.idClassroom = ?1")
	List<ClassStud> findClassStudByIdClassroom(Integer idClassroom);
}
