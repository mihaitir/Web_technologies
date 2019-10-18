package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.entity.Classroom;

@Repository
public interface IClassroomRepository  extends JpaRepository<Classroom,Integer>{

}
