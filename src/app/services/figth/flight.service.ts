import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:8080/reservation/afficher/tout'; // URL de l'endpoint

  constructor(private http: HttpClient) { }

  // Ajuster la méthode pour récupérer les réservations
  getFlights(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
