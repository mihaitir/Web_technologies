package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.Account;
import com.entity.Teacher;

@Repository
public interface IAccoutRepository  extends JpaRepository<Account,Integer>{

//	@Query("SELECT a FROM Account a WHERE a.username = ?1")
	Optional<Account> findByUsername(String username);
}
