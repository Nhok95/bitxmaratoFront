import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultsList: Persona[] = [];

  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.personaService.getAll().subscribe(datos => {
      this.resultsList = datos;
      console.log(this.resultsList)
    });
  }

}
