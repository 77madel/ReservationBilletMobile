import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {arrowBackOutline, heart, logoIonic} from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonInput, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-mot-passe-oublie',
  templateUrl: './mot-passe-oublie.page.html',
  styleUrls: ['./mot-passe-oublie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonInput]
})
export class MotPasseOubliePage  {

  constructor() {
    addIcons({ logoIonic,heart,arrowBackOutline });
  }



}
