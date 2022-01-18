package com.hcl.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.project.domain.Project;
import com.hcl.project.exceptions.ProjectIdException;
import com.hcl.project.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public Project saveOrUpdateProject(Project project) {
		try {
			project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
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
