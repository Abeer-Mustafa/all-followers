import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(x: any){
    console.log(x);
  }

  submit(form: any){
    console.log(form.value);
  }

}
