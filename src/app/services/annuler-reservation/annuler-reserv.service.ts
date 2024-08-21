import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnulerReservService {
  private apiUrl = 'http://localhost:8080/reservation/afficher/annuler'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  annulerReservation(reservationId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${reservationId}`, {});
  }

}
