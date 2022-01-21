package com.hcl.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.project.domain.Backlog;
import com.hcl.project.domain.Project;
import com.hcl.project.domain.ProjectTask;
import com.hcl.project.exceptions.ProjectIdException;
import com.hcl.project.exceptions.ProjectNotFoundException;
import com.hcl.project.repositories.BacklogRepository;
import com.hcl.project.repositories.ProjectRepository;
import com.hcl.project.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;
	
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask pt) {
		try {
			Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
			pt.setBacklog(backlog);
			int btSeq = backlog.getPTSequence() + 1;
			
			backlog.setPTSequence(btSeq);
			
			pt.setProjectSequence(projectIdentifier + "-" + btSeq);
			pt.setProjectIdentifier(projectIdentifier);
			
			
			if(pt.getPriority()==0) {
				pt.setPriority(3);
			}
			if(pt.getStatus()=="" || pt.getStatus()==null) {
				pt.setStatus("TO_DO");
			}
			
			return projectTaskRepository.save(pt);

		}catch(Exception e) {
			throw new ProjectNotFoundException("Project with ID: '" + projectIdentifier + "' Does Not Exist!");
		}
	}

	public Iterable<ProjectTask> findBackLogById(String id) {
		// TODO Auto-generated method stub
		
		Project project = projectRepository.findByProjectIdentifier(id);
		
		if(project==null) {
			throw new ProjectNotFoundException("Project with ID: '" + id + "' Not Found");
		}
		
		return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
	}
	 
}
