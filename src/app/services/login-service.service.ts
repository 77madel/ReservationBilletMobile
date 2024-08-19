import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private isLoggedIn = false;
  private apiUrl = 'http://localhost:8080/personne/signin';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUserSubject = new BehaviorSubject<any>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post<any>(`${this.apiUrl}`, credentials).pipe(
      map(user => {
        console.log('Utilisateur connecté:', user); // Ajouter cette ligne pour vérifier l'objet utilisateur
        if (user && user.jwtToken) {
          this.isLoggedIn = true;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user); // Mettre à jour le BehaviorSubject
        }
        return user;
      })

    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null); // Réinitialiser le BehaviorSubject
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }

  verifLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getUserId(): number | null {
    const user = this.currentUserSubject.value;
    return user && user.id ? user.id : null;
  }
}
