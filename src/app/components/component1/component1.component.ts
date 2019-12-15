import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';
import { SymptomService } from 'src/app/services/symptom.service';
import { Symptom } from 'src/app/models/symptom';

@Component({
  selector: 'app-component',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  //question:Question = new Question();

  questions25:SelectItem[] = undefined;
  selectedQuestions:string[] = [];
  
  constructor(private router: Router, private symptomService: SymptomService) {
    this.questions25 = [
      {label: "Q1", value: "Q1"},
      {label: "Q2", value: "Q2"},
      {label: "Q3", value: "Q3"},
      {label: "Q4", value: "Q4"},
      {label: "Q5", value: "Q5"},
      {label: "Q6", value: "Q6"},
      {label: "Q7", value: "Q7"},
      {label: "Q8", value: "Q8"},
    ];
  }

  ngOnInit() {
    
  }

  sendQuestions() {
    for(let q of this.selectedQuestions) {
      let s = new Symptom(1, q);
      this.symptomService.addSymptom(s);
    }
    
    this.router.navigateByUrl('question2');
  }

}
