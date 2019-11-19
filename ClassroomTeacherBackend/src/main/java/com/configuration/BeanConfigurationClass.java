package com.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import com.service.AccountService;

@Configuration
public class BeanConfigurationClass {
	
	@Bean
	RestTemplate restTemplate() {
		return new RestTemplate();
	}
	
	@Bean
	AccountService accountService() {
		return new AccountService();
	}
}
