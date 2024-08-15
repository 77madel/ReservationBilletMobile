import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonInput, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {checkmarkCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-inscription-reussie',
  templateUrl: './inscription-reussie.page.html',
  styleUrls: ['./inscription-reussie.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonInput]
})
export class InscriptionReussiePage {

  constructor() {
    addIcons({ checkmarkCircleOutline });
  }


}
