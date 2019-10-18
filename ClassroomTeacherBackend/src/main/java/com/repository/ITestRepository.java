package com.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.Test;

@Repository
public interface ITestRepository extends JpaRepository<Test, Integer> {
	
	@Query("SELECT t FROM Test t WHERE t.idClassroom = ?1")
	List<Test> findTestByIdClassroom(Integer idClassroom);
	}
