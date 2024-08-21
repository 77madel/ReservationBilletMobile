import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText } from '@ionic/angular/standalone';
import { LoginServiceService } from 'src/app/services/login-service.service';

import {Router, RouterLink} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { accessibility } from 'ionicons/icons';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
  standalone: true,
  imports: [IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ConnectionPage{

  login={
    email:'',
    password:''
  }

  type:Boolean=true;
errorMessage= '';

  changeType(){
    this.type=!this.type;
  }

  constructor(private service:LoginServiceService,private router:Router,private alertController:AlertController) { }
  seconnecter() {
    this.service.login(this.login.email, this.login.password).subscribe(
      (response) => {
        // Enregistrez le jeton d'authentification dans le stockage local
        localStorage.setItem('token', response.token);
        // Redirigez l'utilisateur vers la page d'accueil ou une page protégée
        this.router.navigate(['/accueil']);
        this.login.email='';
        this.login.password='';
      },
      async (error) => {
        // Gérez les erreurs de connexion
        console.error(error);
        await this.showAlert('Erreur de connexion', 'Login ou mot de passe incorrect. Veuillez réessayer.');
      }
    );
  }


  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();

  }
}
