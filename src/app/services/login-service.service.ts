import { Platform } from '@ionic/angular';
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
        private duree: any;
        private readonly expiration = 10 * 60 * 100; // 10 minutes

    constructor(private http: HttpClient,private router: Router,private platform: Platform) {

      this.debutInactivite();

    // c'est pour utiliser les evenements de user
    this.platform.resume.subscribe(() => this.finInactivite());
    this.platform.pause.subscribe(() => this.finInactivite());

    window.addEventListener('click', () => this.finInactivite());
    window.addEventListener('mousemove', () => this.finInactivite());
    window.addEventListener('keydown', () => this.finInactivite());
    window.addEventListener('scroll', () => this.finInactivite());
  

    }

    debutInactivite() {
      this.duree = setTimeout(() => {
        this.dureeExpirer();
      }, this.expiration);
    }
  
    finInactivite() {
      if (this.duree) {
        clearTimeout(this.duree);
      }
      this.debutInactivite();
    }
  
    dureeExpirer() {
      // Déconnexion de l'utilisateur
      this.deconnection();
    }
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
        console.log("Utilisateur récupéré depuis localStorage:", conversionUser);
        return conversionUser; // Retourne l'objet utilisateur complet
      } else {
        console.log("Aucun utilisateur connecté trouvé.");
        return null;
      }
    }


    deconnection(){
      // Nettoyage de la session et redirection
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiry');
    this.router.navigate(['/login']);
    console.log(localStorage)
    }
    
    
  }



    getUserId() {
      const user = localStorage.getItem('currentUser');
      if (user) {
        const conversionUser = JSON.parse(user);
        const utilisateurId = conversionUser.username?.id; // Récupère l'ID utilisateur
        if (utilisateurId) {
          console.log("ID utilisateur trouvé:", utilisateurId);
          return utilisateurId;
        } else {
          console.error("ID utilisateur non trouvé");
          return null;
        }
      } else {
        console.error("Aucun utilisateur connecté trouvé.");
        return null;
      }
    }





  }
