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
      {value: "Abnormality of blood and blood-forming tissues", label: "Abnormality of blood and blood-forming tissues"},
      {value: "Abnormality of connective tissue", label: "Abnormality of connective tissue"},
      {value: "Abnormality of head or neck", label: "Abnormality of head or neck"},
      {value: "Abnormality of limbs", label: "Abnormality of limbs"},
      {value: "Abnormality of metabolism/homeostasis", label: "Abnormality of metabolism/homeostasis"},
      {value: "Abnormality of prenatal development or birth", label: "Abnormality of prenatal development or birth"},
      {value: "Abnormality of the abdomen", label: "Abnormality of the abdomen"},
      {value: "Abnormality of the breast", label: "Abnormality of the breast"},
      {value: "Abnormality of the cardiovascular system", label: "Abnormality of the cardiovascular system"},
      {value: "Abnormality of the ear", label: "Abnormality of the ear"},
      {value: "Abnormality of the endocrine system", label: "Abnormality of the endocrine system"},
      {value: "Abnormality of the eye", label: "Abnormality of the eye"},
      {value: "Abnormality of the genitourinary system", label: "Abnormality of the genitourinary system"},
      {value: "Abnormality of the immune system", label: "Abnormality of the immune system"},
      {value: "Abnormality of the integument", label: "Abnormality of the integument"},
      {value: "Abnormality of the musculature", label: "Abnormality of the musculature"},
      {value: "Abnormality of the nervous system", label: "Abnormality of the nervous system"},
      {value: "Abnormality of the respiratory system", label: "Abnormality of the respiratory system"},
      {value: "Abnormality of the skeletal system", label: "Abnormality of the skeletal system"},
      {value: "Abnormality of the thoracic cavity", label: "Abnormality of the thoracic cavity"},
      {value: "Abnormality of the voice", label: "Abnormality of the voice"},
      {value: "Growth abnormality", label: "Growth abnormality"},
      {value: "Neoplasm", label: "Neoplasm"},
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
