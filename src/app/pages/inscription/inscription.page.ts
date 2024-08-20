import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from "@angular/router";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { InscriptionServiceService } from 'src/app/services/inscription-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class InscriptionPage implements OnInit {

  utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    numeroDeTelephone:'',
    adresse:'',
    date:new Date(''),

  };

  constructor(private inscriServ: InscriptionServiceService,private router: Router) {}
  ngOnInit(): void {
  }
  public a:any;

  enregistrer() {
    this.inscriServ.addUser(this.utilisateur)
      .subscribe(response => {
        console.log('Utilisateur enregistré:');
        alert('Votre compte a été créer avec succès')
        this.router.navigate(['/login'])
      }, error => {
        
        console.error('Erreur lors de l\'enregistrement:', error);
      });
  }

  redirectConnection(){
    this.router.navigate(['/login'])
  }

  
}
