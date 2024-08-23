import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passager } from 'src/app/models/Passager';

@Injectable({
  providedIn: 'root'
})
export class PassageServiceService {
  apiUrl= "http://localhost:8080/passager/ajout";

  constructor(private http:HttpClient) { }

  addPassager(passager:{
    nom:string;
    prenom:string;
  }):Observable<Passager> {
    return this.http.post<Passager>(`${this.apiUrl}`, passager);
  }
}
