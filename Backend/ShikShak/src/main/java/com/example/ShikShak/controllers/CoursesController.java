package com.example.ShikShak.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ShikShak.entities.Course;





// Http endpoint

@RestController
@CrossOrigin
@RequestMapping("/courses")
public class CoursesController {
	
	@Autowired
	CoursesRepository workoutRepository;
	
//	@RequestMapping(path = "/workouts", method = RequestMethod.GET)
	@GetMapping("/")
	public List<Course> fetchAllWorkouts(){
		System.out.println("fetch all workout method is invoked...");
//		return null;
		//db fetch
		return workoutRepository.findAll();
	}
	
}