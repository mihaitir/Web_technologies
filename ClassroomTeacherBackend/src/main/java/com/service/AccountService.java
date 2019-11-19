package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.repository.IAccoutRepository;
import com.entity.Account;

public class AccountService {

	@Autowired
	IAccoutRepository iAccoutRepository;

	public IAccoutRepository getiAccoutRepository() {
		return iAccoutRepository;
	}

	public Optional<Account> getAcountByUsername(String username) {
		Optional<Account> account = iAccoutRepository.findByUsername(username);
		return account;
	}

}
