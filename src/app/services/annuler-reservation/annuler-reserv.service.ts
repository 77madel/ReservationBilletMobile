import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnulerReservService {
  private apiUrl = 'http://localhost:8080/reservation/afficher/annuler'; // URL de l'API

  constructor(private http: HttpClient) { }

  annulerReservation(reservationId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${reservationId}`, {})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'Erreur inconnue';
          if (error.status === 400) {
            errorMessage = 'La réservation a déjà été annulée';
          } else if (error.status === 404) {
            errorMessage = 'Réservation non trouvée';
          } else if (error.status === 500) {
            errorMessage = 'La réservation a déjà été annulée';//Erreur interne du serveur
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}