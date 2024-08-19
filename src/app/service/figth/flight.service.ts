import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'https://your-api-url.com/flights'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
