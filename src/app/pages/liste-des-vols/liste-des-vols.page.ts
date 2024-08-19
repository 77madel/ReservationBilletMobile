import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonBackButton,
  IonButtons, IonChip, IonCol,
  IonContent, IonDatetime, IonDatetimeButton,
  IonGrid,
  IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ListeVolService } from "../../services/ListeVol/liste-vol.service";

@Component({
  selector: 'app-liste-des-vols',
  templateUrl: './liste-des-vols.page.html',
  styleUrls: ['./liste-des-vols.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonIcon, IonChip, IonLabel, IonItem, IonDatetimeButton, IonModal, IonDatetime]
})
export class ListeDesVolsPage implements OnInit{

  paysDeDepart: string = '';
  searchValue: string = '';
  dateDepart: string = '';
  dateDeRetour: string = '';
  vol:any[] = [];

  constructor(private router: Router, private serviceVol:ListeVolService,private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.paysDeDepart = params['paysDeDepart'];
      this.searchValue = params['searchValue'];
      this.dateDepart = params['dateDepart'];
      this.dateDeRetour = params['dateDeRetour'];
    });

  }


  ngOnInit(): void {
    this.loadVol()
  }

  async loadVol() {
    try {
      const response = await this.serviceVol.ListVol();
      this.vol = response;
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
