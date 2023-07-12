import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deplacementurbain } from './deplacementurbain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeplacementurbainService {
  private baseUrl = "http://localhost:8080/api/deplacement/create";

  constructor(private httpClient: HttpClient) { }

  createdep(deplacement: Deplacementurbain): Observable<Object> {
    return this.httpClient.post(this.baseUrl, deplacement);
  }
}
