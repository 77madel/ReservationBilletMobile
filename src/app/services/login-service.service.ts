import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private isLoggedIn = false;
    private baseUrl = 'http://localhost:8080';
    private apiUrl = 'http://localhost:8080/personne/signin'; // URL de votre API Spring Boot
    
    private currentUserSubject!: BehaviorSubject<any>;
    public currentUser!: Observable<any>;
        static jwtToken: any;
        public current: any;

    constructor(private http: HttpClient,private router: Router) {}
  
    login(username: string, password: string): Observable<any> {
      const credentials = { username, password };
      return this.http.post<any>(`${this.apiUrl}`, credentials).pipe(
        map(user => {
          if (user && user.jwtToken) {
            this.isLoggedIn=true;
            this.getUtilisateur();
            localStorage.setItem('currentUser', JSON.stringify(user));
            let a = localStorage.getItem('currentUser');
            if(a != null){
              this.current = JSON.parse(a);
            }
            //console.log("Utilisateur actu", this.current)

          }
          return user;

          
        }),
      );
    }

    // Observable pour écouter les changements de connexion
  isLoggedIn$ = this.loggedIn.asObservable();
  
    logout(): void {
      if (confirm("Êtes-vous sûr de vouloir vous déconnecter ?")){
      localStorage.removeItem('currentUser');
      this.loggedIn.next(false); // Déclenche un changement d'état
      this.router.navigate(['/login']);
      window.location.reload();
      }
    }
  
    verifLoggedIn(): boolean {
      return this.hasToken();
    }

    get(name: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${name}/afficher`);
    }


    getUtilisateur() {
      const user = localStorage.getItem('currentUser');
    
      if (user) {
        const conversionUser = JSON.parse(user);
        
        const prenom = conversionUser.username.prenom;
        const nom = conversionUser.username.nom;
        const id=conversionUser.username.id;
        return conversionUser;
      } else {
        console.log("Aucun utilisateur connecté trouvé.");
        return null;
      }
    }
    
    
  }


