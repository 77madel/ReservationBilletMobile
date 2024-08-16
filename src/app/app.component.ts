import {AfterViewInit, Component} from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabButton, IonTabBar, IonIcon, IonTabs, IonItem, IonLabel } from '@ionic/angular/standalone';
import { AccueilPage } from "./pages/accueil/accueil.page";
import { airplane, home, notifications, person } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router, RouterLink } from '@angular/router';
import { ReservationvolPage } from './pages/reservation_vol/reservationvol/reservationvol.page';
import { NgIf } from '@angular/common';

addIcons({
  'airplane': airplane,
  'home': home,
  'notifications': notifications,
  'person': person
});

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonTabs,
    IonIcon,
    IonTabBar,
    IonLabel,
    IonTabButton,
    IonApp,
    IonRouterOutlet,
    AccueilPage,
    RouterLink,
    ReservationvolPage,
NgIf
  ],
})
export class AppComponent implements AfterViewInit {
  activeTab: HTMLElement | null = null;
  movingCircle: HTMLElement | null = null;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.movingCircle = document.querySelector('.moving-circle');
    this.activeTab = document.querySelector('ion-tab-button.active'); // Sélectionner l'onglet avec la classe active

    if (this.activeTab && this.movingCircle) {
      // Positionner la boule sur l'onglet "Accueil" au démarrage
      // this.moveCircleToTab(this.activeTab, false);
    }

    this.addClickListeners();
  }

  addClickListeners() {
    const tabButtons = document.querySelectorAll('ion-tab-button');
    console.log('Tab Buttons:', tabButtons);

    tabButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        console.log('Button Clicked:', event.currentTarget);
        this.onTabClick(event);
      });
    });
  }

  onTabClick(event: MouseEvent) {
    const clickedTab = event.currentTarget as HTMLElement;

    if (this.activeTab) {
      this.activeTab.classList.remove('active');
    }
    clickedTab.classList.add('active');
    this.activeTab = clickedTab;

    if (this.movingCircle) {
      // Déplacer la boule vers l'onglet cliqué avec animation
      // this.moveCircleToTab(clickedTab, true);
    }
  }

  shouldShowFooter(): boolean {
    // Retourne false si la route actuelle est la page de connexion
    return this.router.url !== '/connexion';
  }
}


  // moveCircleToTab(tab: HTMLElement, animate: boolean) {
  //   const tabRect = tab.getBoundingClientRect();
  //   const footerRect = tab.parentElement?.getBoundingClientRect();

  //   if (footerRect && this.movingCircle) {
  //     const tabCenter = tabRect.left + tabRect.width / 2;
  //     const footerStart = footerRect.left;

  //     // Calculer la position exacte du cercle
  //     const circlePosition = tabCenter - footerStart - this.movingCircle.offsetWidth / 2;

  //     this.movingCircle.style.transform = `translateX(${circlePosition}px)`;

  //     if (animate) {
  //       this.movingCircle.style.transition = `transform 0.3s ease`;
  //     } else {
  //       this.movingCircle.style.transition = `none`;
  //     }
  //   }
  // }
