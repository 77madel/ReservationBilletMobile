import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private isLoggedIn = false;
    private apiUrl = 'http://localhost:8080/personne/signin'; // URL de votre API Spring Boot

    private currentUserSubject!: BehaviorSubject<any>;
    public currentUser!: Observable<any>;    static jwtToken: any;

    constructor(private http: HttpClient,private router: Router) {}

    login(username: string, password: string): Observable<any> {
      const credentials = { username, password };
      return this.http.post<any>(`${this.apiUrl}`, credentials).pipe(
        map(user => {
          if (user && user.jwtToken) {
            this.isLoggedIn=true;
            localStorage.setItem('currentUser', JSON.stringify(user));

          }
          return user;


        }),
      );
    }

    logout(username: string='', password: string=''): void {
      localStorage.removeItem('currentUser');
      this.router.navigate(["/login"])
      this.isLoggedIn=false;

    }

    verifLoggedIn():boolean{
      return this.isLoggedIn;
    }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  }
