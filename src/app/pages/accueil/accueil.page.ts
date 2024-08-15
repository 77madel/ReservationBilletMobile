import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonIcon, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { airplane, home, library, notifications, person, personOutline, playCircle, radio, search } from 'ionicons/icons';

import { addIcons } from 'ionicons'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTabButton, IonIcon, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class AccueilPage implements OnInit {
 
  mosque: String = "assets/Images/djenne-mosque 1.png";
  logo: String = "assets/Images/Logo_PANKURU.png";
  pays: any =[ {
    "name": "Mali",
    "capital": "Bamako",
    "prix": 1500
  },
  {
    "name": "Burkina Faso",
    "capital": "Ouaga",
    "prix": 2000
  },
  {
    "name": "Côte d'Ivoire",
    "capital": "Abidjan",
    "prix": 2500
  },
  {
    "name": "Sénégal",
    "capital": "Dakar",
    "prix": 3000
  },
  {
    "name": "Guinée",
    "capital": "Conakry",
    "prix": 3500
  }
  ]
  constructor() { 
    addIcons({ library, playCircle, radio, search,home,airplane,notifications,person});
    
  }


  ngOnInit() {
  }

}
