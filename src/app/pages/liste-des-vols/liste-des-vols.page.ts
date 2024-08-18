import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons, IonChip, IonCol,
  IonContent, IonDatetime, IonDatetimeButton,
  IonGrid,
  IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {ListeVolService} from "../../services/ListeVol/liste-vol.service";

@Component({
  selector: 'app-liste-des-vols',
  templateUrl: './liste-des-vols.page.html',
  styleUrls: ['./liste-des-vols.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonIcon, IonChip, IonLabel, IonItem, IonDatetimeButton, IonModal, IonDatetime]
})
export class ListeDesVolsPage implements OnInit{
  vol:any[] = [];

  constructor(private router: Router, private serviceVol:ListeVolService) { }


  ngOnInit(): void {
    this.loadVol()
  }

  async loadVol() {
    try {
      const response = await this.serviceVol.ListVol();
      this.vol = response;
      console.log("folo", this.vol)
    } catch (error: any) {
      throw error;
    }
  }

  getFormattedTime(dateEtHeure: string): string {
    const date = new Date(dateEtHeure);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  getFirstThreeLetters(nom: string): string {
    return nom.substring(0, 3);
  }

}
