import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
    private apiUrl = 'http://localhost:8080/personne/connexion'; // URL de votre API Spring Boot
    static jwtToken: any;
  
    constructor(private http: HttpClient) {}
  
    login(username: string, password: string): Observable<any> {
      const credentials = { username, password };
      return this.http.post(`${this.apiUrl}`, credentials);
    }
  
    logout(): void {
      localStorage.removeItem('token');
    }
  }
