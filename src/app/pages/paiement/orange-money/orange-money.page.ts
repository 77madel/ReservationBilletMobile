import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonInput,
  IonTextarea,
  IonTabButton,
  IonButton,
  IonIcon,
  IonBackButton,
  IonAlert,
  IonApp,
} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-orange-money',
  templateUrl: './orange-money.page.html',
  styleUrls: ['./orange-money.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonAlert,
    IonBackButton,
    IonIcon,
    IonButton,
    IonTabButton,
    IonTextarea,
    IonInput,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
  ],
})
export class OrangeMoneyPage implements OnInit {
  tel: string='';
  mess: any;
  alertButtons = ['OK'];
  constructor( private router:Router) {
    addIcons({
      arrowBack
    })
  }

  ngOnInit() {
    this.mess;
  }

  verifierLongueur() {
    if (this.tel.length === 8) {
      this.mess='est effectué';
      this.router.navigate(['/']);
      
    } else {
      this.mess='est refusé'
      this.router.navigate(['/payement-refuser']);
    }

}

  retour() {
    window.history.back();
  }
}
