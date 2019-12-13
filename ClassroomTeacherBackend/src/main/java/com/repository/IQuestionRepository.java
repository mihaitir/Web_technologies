package com.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.Question;

@Repository
public interface IQuestionRepository extends JpaRepository<Question, Integer> {


	@Query("SELECT q FROM Question q WHERE q.idTest = ?1")
	List<Question> findQuestionsByIdTest(Integer idTest);
}
