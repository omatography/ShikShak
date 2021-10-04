import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/Classes/Course';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent implements OnInit {

  constructor() { }

  c:course = {
    "id": 1,
    "name":"Guitar",
    "desc":"The guitar is a fretted musical instrument that typically has six strings. It is held flat against the player's body and played by strumming or plucking the strings with the dominant hand,  while simultaneously pressing selected strings against frets with the fingers of the opposite hand.The main objective of this course is to  create an enhanced appreciation for music through playing the guitar. Students will learn how to read music notation, chord symbols, and tablature.",
"duration":"10 months",
"mentor" :"Kapil Srivastava",
"experience" : "20+ years",
"rating":  4.7,
"img": 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
  }

  ngOnInit(): void {
  }

}
