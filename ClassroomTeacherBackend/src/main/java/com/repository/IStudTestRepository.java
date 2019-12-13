package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.entity.StudTest;

@Repository
public interface IStudTestRepository extends JpaRepository<StudTest, Integer> {

	@Query("SELECT st FROM StudTest st WHERE st.idStudent = ?1 AND st.idTest = ?2")
	Optional<StudTest> findByIdStudentAndIdTest(Integer idStudent, Integer idTest);
	
	
	@Query("SELECT st FROM StudTest st WHERE st.idStudent = ?1 AND st.idClassroom = ?2")
	Optional<List<StudTest>> findByIdStudentAndIdClassroom(Integer idStudent, Integer idClassroom);
}
