package com.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.repository.ITestRepository;

public class TestService {

	@Autowired
	ITestRepository iTestRepository;
	
	
}
