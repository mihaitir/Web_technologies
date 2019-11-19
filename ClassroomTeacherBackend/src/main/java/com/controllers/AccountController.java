package com.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.entity.Account;
import com.service.AccountService;
import com.service.LoginService;

@RestController
@CrossOrigin
public class AccountController {

	@Autowired
	LoginService loginService;

	@Autowired
	AccountService accountService;

	@PostMapping(path = "/onlogin")
	public ResponseEntity<Account> onLogin(@RequestBody Account account) {
		Optional<Account> a = accountService.getAcountByUsername(account.getUsername());
		if (a.isPresent() == false)
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

		if (a.get().getPassword().compareTo(account.getPassword()) != 0)
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		else
			return new ResponseEntity<Account>(a.get(), HttpStatus.OK);
	}

	@PostMapping("/saveAccount")
	public ResponseEntity<?> saveAccount(@RequestBody Account account) {
		try {
			Optional<Account> a = accountService.getAcountByUsername(account.getUsername());
			if (a.isPresent())
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			else
			{
				accountService.getiAccoutRepository().save(account);
			}
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (HttpClientErrorException hcee) {
			return new ResponseEntity<String>(hcee.getMessage(), hcee.getStatusCode());
		}
	}

	@DeleteMapping("/login/deleteAll")
	public ResponseEntity<?> deleteAll() {
		try {
			accountService.getiAccoutRepository().deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (HttpClientErrorException hcee) {
			return new ResponseEntity<>(hcee.getStatusCode());
		}
	}

	@GetMapping("/getAccountByUsername/{username}")
	public ResponseEntity<Account> getAccountByUsername(@PathVariable String username) {
		try {
			Optional<Account> a = accountService.getAcountByUsername(username);
			if (a.isPresent())
				return new ResponseEntity<Account>(a.get(), HttpStatus.OK);
			else
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (HttpClientErrorException hcee) {
			return new ResponseEntity<>(hcee.getStatusCode());
		}

	}
}
