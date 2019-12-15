import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Symptom } from '../models/symptom';


@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  URL = environment.apiURL;

  symptoms:Symptom[]= [];

  constructor() { //private http:HttpClient
  }

  addSymptom(newSymptom:Symptom) {
    this.symptoms.push(newSymptom);
  }

  getAll():Symptom[] {
    return this.symptoms;
  }

  //removeSymptom(){}
}
