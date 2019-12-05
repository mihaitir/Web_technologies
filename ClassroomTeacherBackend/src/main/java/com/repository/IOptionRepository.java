package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.OptionR;

@Repository
public interface IOptionRepository extends JpaRepository<OptionR, Integer> {

}
