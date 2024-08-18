import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {
 private apiUrl: string='http://localhost:8080/utilisateur' ;

  constructor(private http:HttpClient) { }

  addUser(user:Utilisateur):Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}/ajout`, user);
  }

}
