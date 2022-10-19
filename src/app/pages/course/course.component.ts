import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: any;

  onAdd(){
    this.courses = [
      {'id': 1, 'name': 'Course 1'},
      {'id': 2, 'name': 'Course 2'},
      {'id': 3, 'name': 'Course 3'},
    ];

  }

  onRmove(course: any){
    let indexCourse = this.courses.indexOf(course);
    this.courses.splice(indexCourse, 1);
  }
  trackCourse(index: any, course: any){
    return course ? course.index : undefined;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
