import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordremission } from './ordremission';

@Injectable({
  providedIn: 'root'
})
export class OrdremissionService {

  private baseUrl ="http://localhost:8080/api/ordrem/readorder";
  private baseUrl1 ="http://localhost:8080/api/ordrem/createorder";
  constructor(private httpClient :HttpClient) {}
     readordremission(): Observable<Ordremission[]>{
      return this.httpClient.get<Ordremission[]>(this.baseUrl);
    }
    createordremission(ordremission : Ordremission): Observable<Object>{
      return this.httpClient.post(this.baseUrl1,ordremission);
    }
   
}
