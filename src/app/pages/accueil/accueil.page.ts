import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonIcon, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { airplane, home, library, notifications, person, personOutline, playCircle, radio, search } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { AccueilService } from './accueil.service'; // Import du service

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTabButton, IonIcon, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class AccueilPage implements OnInit {

  mosque: String = "assets/Images/djenne-mosque 1.png";
  logo: String = "assets/Images/Logo_PANKURU.png";

  villes: any[] = []; // Variable pour stocker les données récupérées

  constructor(private accueilService: AccueilService) { // Injection du service
    addIcons({ library, playCircle, radio, search, home, airplane, notifications, person });
  }

  ngOnInit() {
    this.loadVilles(); // Appel à la méthode pour charger les données au démarrage
  }

  // Méthode pour charger les données
  loadVilles() {
    this.accueilService.getData().subscribe({
      next: data => {
        this.villes = data;
        console.log(this.villes);
      },
      error: error => {
        console.error('Erreur lors de la récupération des données', error);
      },
      complete: () => {
        console.log('Récupération des données terminée');
      }
    });
    
  }
}
