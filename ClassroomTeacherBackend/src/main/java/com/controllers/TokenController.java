package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.entity.Token;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TokenController {

	@Autowired
	RestTemplate restTemplate;

	private static final String CLIENT_ID = "myapp";
	private static final String GRANT_TYPE = "password";
	private static final String SCOPE = "openid";

//	@PostMapping(path = "/onlogin")
//	public ResponseEntity<Token> getTokenDetails(@RequestHeader String username, @RequestHeader String password) {
//
//		try {
//			RestTemplate restTemplate = new RestTemplate();
//			MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
//			map.add("client_id", CLIENT_ID);
//			map.add("username", username);
//			map.add("password", password);
//			map.add("grant_type", GRANT_TYPE);
//			map.add("scope", SCOPE);
//
//			HttpHeaders headers = new HttpHeaders();
//			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//
//			String url = "http://localhost:8080/auth/realms/ClassroomApp/protocol/openid-connect/token";
//
//			HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
//			ResponseEntity<Token> response = restTemplate.exchange(url, HttpMethod.POST, request, Token.class);
//			return new ResponseEntity<Token>(response.getBody(), HttpStatus.OK);
//
//		} catch (HttpClientErrorException e) {
//			return new ResponseEntity<>(null, e.getStatusCode());
//		}
//	}
}
