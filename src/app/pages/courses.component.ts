import { Component } from "@angular/core";
import { CoursesService } from '../courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>

        {{ text | summary:10 }}<br/>
        `
})

export class CoursesComponent{
    title =  'List of courses';
    courses;
    isActive = false;
    email = "abeer@example.com";
    text = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

    course= {
        title : "The Complete Corse Angular 4",
        rating: 4.9565,
        students: 25846589,
        price: 190.23,
        releaseDate: new Date(2020, 7, 1)
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onEmail(){
        console.log(this.email);
    }

    onName(name: any){
        console.log(name);
    }

    getTitle(){
        return this.title;
    }


}
