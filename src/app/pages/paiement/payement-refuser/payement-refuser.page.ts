import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon } from '@ionic/angular/standalone';
import { RouterLink, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-payement-refuser',
  templateUrl: './payement-refuser.page.html',
  styleUrls: ['./payement-refuser.page.scss'],
  standalone: true,
  imports: [IonIcon, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,RouterOutlet]
})
export class PayementRefuserPage {

  constructor() {
    addIcons({
      arrowBack
    })
   }

 
  retour() {
    window.history.back();
  }
}
