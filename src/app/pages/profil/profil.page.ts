import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonIcon, IonTabButton, IonTabBar, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { airplane, chevronForwardOutline, exitOutline, helpCircleOutline, home, library, lockOpenOutline, notifications, person, personOutline, playCircle, radio, search, settingsOutline } from 'ionicons/icons';

import { addIcons } from 'ionicons'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon]
})
export class ProfilPage implements OnInit {

  constructor() {
    addIcons({ library, playCircle, radio, search,home,
      airplane,notifications,person,helpCircleOutline,settingsOutline,exitOutline,
      lockOpenOutline,chevronForwardOutline});
   }

  ngOnInit() {
  }

}
