package com.hcl.project.web;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hcl.project.domain.ProjectTask;
import com.hcl.project.services.MapValidationErrorService;
import com.hcl.project.services.ProjectTaskService;

import org.springframework.validation.*;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

	@Autowired
	private ProjectTaskService projectTaskService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	
	@PostMapping("/{backlog_id}")
	public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody ProjectTask projectTask,
										BindingResult result, @PathVariable String backlog_id){
		ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
		if(errorMap != null) return errorMap;
		
		ProjectTask pt = projectTaskService.addProjectTask(backlog_id, projectTask);
		
		return new ResponseEntity<ProjectTask>(pt, HttpStatus.CREATED);
	}
	

	@GetMapping("/{backlog_id}")
	public ResponseEntity<Iterable<ProjectTask>> getProjectBacklog(@PathVariable String backlog_id){
		return new ResponseEntity<Iterable<ProjectTask>>(projectTaskService.findBackLogById(backlog_id), HttpStatus.OK);
	}
	
	@GetMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> getProjectTask(@PathVariable String backlog_id, @PathVariable String pt_id){
		ProjectTask pt = projectTaskService.findPTbyProjectSequence(backlog_id, pt_id);
		return new ResponseEntity<ProjectTask>(pt, HttpStatus.OK);	
	}
	
	  @PatchMapping("/{backlog_id}/{pt_id}")
	    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
	                                               @PathVariable String backlog_id, @PathVariable String pt_id ){

	        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
	        if (errorMap != null) return errorMap;

	        ProjectTask updatedTask = projectTaskService.updateProjectTask(projectTask, pt_id, backlog_id);

	        return new ResponseEntity<ProjectTask>(updatedTask,HttpStatus.OK);

	    }
	
	@DeleteMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> deleteProjectTask(@PathVariable String backlog_id, @PathVariable String pt_id){
		projectTaskService.deleteProjectTask(backlog_id, pt_id);
		return new ResponseEntity<String>("ProjectTask with ID '"+pt_id+"' was successfully deleted!", HttpStatus.OK);
	}
}
