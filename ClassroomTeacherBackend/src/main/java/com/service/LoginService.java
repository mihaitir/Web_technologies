package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Account;
import com.repository.IAccoutRepository;

@Service
public class LoginService {

	@Autowired
	public IAccoutRepository iAccoutRepository;
	
	public Optional<Account> login(String username) {
		return iAccoutRepository.findByUsername(username);
	}
}

