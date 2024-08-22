import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from 'src/app/models/paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementServiceService {

  paie:Paiement[]=[];

  constructor(private http:HttpClient) { }

  EnregistrerPaiement(paie:Paiement):Observable<Paiement>{
    return this.http.post<Paiement>("http://localhost:8080/mobileMoney/ajout",paie);
  }

}
