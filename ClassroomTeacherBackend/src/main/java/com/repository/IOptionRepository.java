package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.OptionR;

@Repository
public interface IOptionRepository extends JpaRepository<OptionR, Integer> {

	

	@Query("SELECT o FROM OptionR o WHERE o.idQuestion = ?1")
	List<OptionR> findOptionRByidQuestion(Integer idQuestion);
}
