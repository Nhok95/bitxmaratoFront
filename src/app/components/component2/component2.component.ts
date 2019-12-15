import { Component, OnInit } from '@angular/core';
import { Symptom } from 'src/app/models/symptom';
import { SymptomService } from 'src/app/services/symptom.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  question:string= "Do you like bread?"

  checked: boolean = false;

  selectedQuestions:Symptom[] = [];

  constructor(private symptomService: SymptomService) { }

  ngOnInit() {
    this.selectedQuestions = this.symptomService.getAll();
  }

  sendQuestions() {
    if (this.checked) {
      let s = new Symptom(1, "it works!");
      this.symptomService.addSymptom(s);
    }
    

    this.checked = false;
    this.question = "Do you like tomatoes?"
  }

}
