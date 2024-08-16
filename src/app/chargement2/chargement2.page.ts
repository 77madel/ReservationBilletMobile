import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonImg, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-chargement2',
  templateUrl: './chargement2.page.html',
  styleUrls: ['./chargement2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonButton, RouterLink]
})
export class Chargement2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
