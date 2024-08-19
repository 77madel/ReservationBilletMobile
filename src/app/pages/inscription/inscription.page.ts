import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import { HttpClient } from '@angular/common/http';

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
    prenom:'',
    email: '',
    motDePasse: ''
  };

  private apiUrl = 'http://localhost:8080/utilisateur/ajout';

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }


  enregistrer() {
    this.http.post(this.apiUrl, this.utilisateur).subscribe(
      (response) => {
        console.log('Utilisateur enregistré avec succès', response);
                this.router.navigate(['/accueil']); 
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur', error);
      }
    );
  }

}
