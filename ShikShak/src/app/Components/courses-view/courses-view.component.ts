import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/Classes/Course';
import { CourseService } from 'src/app/Services/courses-service.service';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  courseList: Array<course> = []
  deleteCourse(id: number){
    this.courseService.deleteCourse(id)
    .subscribe((res: any) => {
      console.log(res);
      // this.courses = res;
    });
  }

 
  addCourse(id: number,name:string,mentor:string,desc:string,duration:string,experience:string,rating:number,img:string){
    this.courseService.addCourse({id,name,mentor,desc,duration,experience,rating,img})
    .subscribe((res: any) => {
      console.log(res);
    });
  }


  ngOnInit(): void {
    console.log('Called once on load of the component');
    //http fetch code here ---
    // this.http.get('http://localhost:3000/courses/')
    this.courseService.getAllCourses()
    .subscribe((res: any) => {
      console.log(res);
      this.courseList = res;
    });
  }

}

