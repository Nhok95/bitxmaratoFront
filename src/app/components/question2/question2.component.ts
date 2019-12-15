import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  question:string= "Do you like bread?"

  checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sendQuestions() {
    console.log(this.checked);
    this.checked = false;
    this.question = "Do you like tomatoes?"
  }

}
