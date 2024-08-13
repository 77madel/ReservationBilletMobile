import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PageDetailsPage } from '../page-details/page-details.page';

@Component({
  selector: 'app-reservationvol',
  templateUrl: './reservationvol.page.html',
  styleUrls: ['./reservationvol.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    PageDetailsPage
  ]
})
export class ReservationvolPage{

  // Injecter le Router dans le constructeur de votre composant
  constructor(private router: Router) { }

  handleContainerClick(event: MouseEvent, route: string, details: any) {
    const target = event.target as HTMLElement;
    if (target && target instanceof HTMLElement) {
      target.style.backgroundColor = 'white';

      setTimeout(() => {
        this.router.navigate([route], { state: { containerDetails: details } });
      }, 300);
    }
  }


}
