import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationVolService {

  private apiUrl = 'http://localhost:8080/reservation';

  constructor(private http: HttpClient) { }

  ajouterReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ajout`, reservation);
  }
}
// Méthode pour enregistrer une réservation de vol
// ajouterReservation(reservation: Reservation): Observable<Reservation> {
//   return this.http.post<Reservation>("http://localhost:8080/reservation/ajout", reservation);
// }
