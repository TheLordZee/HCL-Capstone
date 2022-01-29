package com.hcl.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.project.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
}