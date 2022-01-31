package com.hcl.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.project.domain.Backlog;
import com.hcl.project.domain.Project;
import com.hcl.project.domain.User;
import com.hcl.project.exceptions.ProjectIdException;
import com.hcl.project.repositories.BacklogRepository;
import com.hcl.project.repositories.ProjectRepository;
import com.hcl.project.repositories.UserRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private BacklogRepository backlogRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public Project saveOrUpdateProject(Project project, String username) {
		try {
			
			User user = userRepository.findByUsername(username);
			project.setProjectLeader(user.getUsername());
			project.setUser(user);
			
			String identifier = project.getProjectIdentifier().toUpperCase();
			project.setProjectIdentifier(identifier);
			if(project.getId()==null) {
				Backlog backlog = new Backlog();
				project.setBacklog(backlog);
				backlog.setProject(project);
				backlog.setProjectIdentifier(identifier);
			} else {
				project.setBacklog(backlogRepository.findByProjectIdentifier(identifier));
			}
			
			return projectRepository.save(project);
		} catch (Exception e){
			throw new ProjectIdException("Project ID: " + project.getProjectIdentifier().toUpperCase() + " Already Exists!");
		}
	}
	
	public Project findProjectByIdentifier(String projectId) {
		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase()); 
		
		if(project == null) {
			throw new ProjectIdException("Project With ID: '" + projectId.toUpperCase() + "' Does Not Exist!");
		}
		
		return project;
	}
	
	public Iterable<Project> findAllProjects(){
		return projectRepository.findAll();
	}
	
	public void deleteProjectByIdentifier(String projectId) {
		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if(project == null) {
			throw new ProjectIdException("Project With ID: '" + projectId.toUpperCase() + "' Does Not Exist");
		}
		projectRepository.delete(project);
	}
}
