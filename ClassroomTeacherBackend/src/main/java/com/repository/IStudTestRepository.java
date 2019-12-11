package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.StudTest;

@Repository
public interface IStudTestRepository extends JpaRepository<StudTest, Integer> {

	
}
