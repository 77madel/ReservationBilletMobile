import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LoginServiceService } from 'src/app/services/login-service.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import {Router, RouterLink} from '@angular/router';
>>>>>>> 1e3fff5ac813b5e25d619837a651a75e4af76aa7

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ConnectionPage implements OnInit {

  login={
    email:'',
    password:''
  }

  type:Boolean=true;

  changeType(){
    this.type=!this.type;
  }

  constructor(private service:LoginServiceService,private router:Router) { }

  seconnecter() {
    this.service.login(this.login.email, this.login.password).subscribe(
      (response) => {
        // Enregistrez le jeton d'authentification dans le stockage local
        localStorage.setItem('token', response.token);
        // Redirigez l'utilisateur vers la page d'accueil ou une page protégée
<<<<<<< HEAD
        this.router.navigate(['/home']);
=======
        this.router.navigate(['/accueil']);
>>>>>>> 1e3fff5ac813b5e25d619837a651a75e4af76aa7
        this.login.email='';
        this.login.password='';
      },
      (error) => {
        // Gérez les erreurs de connexion
        console.error(error);
      }
    );
  }

<<<<<<< HEAD
  
=======

>>>>>>> 1e3fff5ac813b5e25d619837a651a75e4af76aa7

  ngOnInit() {
  }

<<<<<<< HEAD
  
=======

>>>>>>> 1e3fff5ac813b5e25d619837a651a75e4af76aa7
}
