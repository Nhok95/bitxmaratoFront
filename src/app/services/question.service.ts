import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  URL = environment.apiURL;

  constructor(private http:HttpClient) { }

  /*getByID(id:number):Observable<> {

    return this.http.get<>(this.URL + "/" + id);
  }*/
}
