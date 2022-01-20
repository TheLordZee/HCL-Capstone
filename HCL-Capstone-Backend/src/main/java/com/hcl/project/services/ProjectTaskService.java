package com.hcl.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.project.domain.Backlog;
import com.hcl.project.domain.ProjectTask;
import com.hcl.project.repositories.BacklogRepository;
import com.hcl.project.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;
	
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask pt) {
		Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
		pt.setBacklog(backlog);
		int btSeq = backlog.getPTSequence() + 1;
		pt.setProjectSequence(projectIdentifier + "-" + btSeq);
		pt.setProjectIdentifier(projectIdentifier);
		
//		if(pt.getPriority()==0) {
//			pt.setPriority(3);
//		}
		if(pt.getStatus()=="" || pt.getStatus()==null) {
			pt.setStatus("TO_DO");
		}
		
		return projectTaskRepository.save(pt);
	}
}
