import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabButton, IonTabBar, IonIcon, IonTabs, IonItem } from '@ionic/angular/standalone';
import { AccueilPage } from "./pages/accueil/accueil.page";
import { airplane, home, library, notifications, person, personOutline, playCircle, radio, search } from 'ionicons/icons';

import { addIcons } from 'ionicons'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTabs, IonIcon, IonTabBar, IonTabButton, IonApp, IonRouterOutlet, AccueilPage,RouterLink],
})
export class AppComponent {
  constructor() {
    addIcons({ library, playCircle, radio, search,home,airplane,notifications,person});
  }
}
