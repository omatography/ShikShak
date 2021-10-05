package com.example.ShikShak.controllers;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ShikShak.entities.Course;



public interface CoursesRepository extends JpaRepository<Course, Integer>{

}