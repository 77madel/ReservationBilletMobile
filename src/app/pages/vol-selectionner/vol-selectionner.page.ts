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

import {ActivatedRoute} from "@angular/router";
import {ListeVolService} from "../../services/ListeVol/liste-vol.service";

@Component({
  selector: 'app-vol-selectionner',
  templateUrl: './vol-selectionner.page.html',
  styleUrls: ['./vol-selectionner.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonItem, IonLabel, IonInput]
})
export class VolSelectionnerPage implements OnInit {
  vol: any;

  constructor(private route: ActivatedRoute, private serviceVol: ListeVolService) { }
  ngOnInit() {
    const volId = this.route.snapshot.paramMap.get('id');
    this.loadVolDetail(volId);
  }

  async loadVolDetail(volId: string | null) {
    try {
      if (volId) {
        const response = await this.serviceVol.getVolById(volId);
        this.vol = response;
        console.log("Vol-selectionner", this.vol)
      }
    } catch (error: any) {
      console.error('Error loading vol detail:', error);
    }
  }

  getFormattedTime(dateEtHeure: string): string {
    const date = new Date(dateEtHeure);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  getFormattedDate(dateEtHeure: string): string {
    const date = new Date(dateEtHeure);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' }); // Format JJ/MM/AAAA
  }


  getFirstThreeLetters(nom: string): string {
    return nom.substring(0, 3);
  }

}
