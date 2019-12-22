import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8000/polls'

  constructor(private http:HttpClient) { }


  getAll():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL);
  }

  getUsersbyName(name: string):Observable<Persona[]> {

    return this.http.get<Persona[]>(this.URL+ '/name');
  }
}
