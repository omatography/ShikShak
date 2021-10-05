import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  baseURL:string = "http://localhost:9004/courses/"
  
  constructor(private http: HttpClient) { }

  getAllCourses(){
    console.log("Hiii")
    return this.http.get( this.baseURL);
    
  }
  
 
    deleteCourse(id: number){
      return this.http.delete( this.baseURL + id)
    }
  
   
    addCourse(course: any){
      return this.http.post( this.baseURL, course)
    }
  
  }
