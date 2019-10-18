package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Teacher;

@Repository
public interface ITeacherRepository extends JpaRepository<Teacher, Integer> {

}
