import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonImg, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-chargement1',
  templateUrl: './chargement1.page.html',
  styleUrls: ['./chargement1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonImg, RouterLink]
})
export class Chargement1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
