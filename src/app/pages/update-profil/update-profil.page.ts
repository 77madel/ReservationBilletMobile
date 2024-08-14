import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonAvatar, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { createOutline, eye } from 'ionicons/icons';
@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.page.html',
  styleUrls: ['./update-profil.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonInput, IonAvatar, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UpdateProfilPage implements OnInit {

  constructor() { 

    addIcons({eye,createOutline})
  }
 

  ngOnInit() {
  }

}
