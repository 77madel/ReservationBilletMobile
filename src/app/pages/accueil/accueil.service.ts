import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  private apiUrl = 'http://localhost:8080';  // l'URL de votre API

  constructor(private http: HttpClient) { }

  // méthode GET
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ville/afficher/tout`);
  }



}

