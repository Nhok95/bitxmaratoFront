import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //question:Question = new Question();

  questions25:SelectItem[] = undefined;
  selectedQuestions:string[] = [];
  
  constructor(private router: Router) {
    this.questions25 = [
      {label: "Q1", value: "Q1"},
      {label: "Q2", value: "Q2"},
      {label: "Q3", value: "Q3"}
    ];
  }

  ngOnInit() {
    
  }

  sendQuestions() {
    console.log(this.selectedQuestions);
    this.router.navigateByUrl('question2');
  }

}
