package com.hcl.project.domain;

import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.*;
import lombok.*;

@Entity
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long id;
	
	@Email(message = "Username needs to be an email")
	@NotBlank(message = "Username is required")
	@Column(unique=true)
	@Getter @Setter private String username;
	@NotBlank(message="Please enter your full name")
	@Getter @Setter private String fullName;
	@NotBlank(message = "Password is required")
	@Getter @Setter private String password;
	
	@Transient
	@Getter @Setter private String confirmPassword;
	
	@Getter @Setter private Date createdAt;
	@Getter @Setter private Date updatedAt;
	
	
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
}