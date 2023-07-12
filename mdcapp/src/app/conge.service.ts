import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Conge } from './conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  
  private baseURL ="http://localhost:8080/api/conge/create";

  constructor(private httpClient: HttpClient) { }

  createconge(conge : Conge): Observable<Object>{
    return this.httpClient.post(this.baseURL,conge);
  }
}
