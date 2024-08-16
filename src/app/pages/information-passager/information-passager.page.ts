import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonItem, IonInput } from '@ionic/angular/standalone';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-information-passager',
  templateUrl: './information-passager.page.html',
  styleUrls: ['./information-passager.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonCard, IonItem, IonInput]
})
export class InformationPassagerPage implements OnInit {

  constructor() {addIcons({ arrowBackCircleOutline }); }

  ngOnInit() {
  }

}
