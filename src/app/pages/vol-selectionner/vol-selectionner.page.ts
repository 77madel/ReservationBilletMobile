import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vol-selectionner',
  templateUrl: './vol-selectionner.page.html',
  styleUrls: ['./vol-selectionner.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonItem, IonLabel, IonInput]
})
export class VolSelectionnerPage implements OnInit {

  

  constructor(private route:ActivatedRoute) {

   
   }

  ngOnInit() {
  }

}
