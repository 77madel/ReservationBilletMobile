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

import {ActivatedRoute, Router} from "@angular/router";
import {ListeVolService} from "../../services/ListeVol/liste-vol.service";

@Component({
  selector: 'app-vol-selectionner',
  templateUrl: './vol-selectionner.page.html',
  styleUrls: ['./vol-selectionner.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonItem, IonLabel, IonInput]
})
export class VolSelectionnerPage implements OnInit {
  volId!: number;
  vol: any;

  paysDeDepart: string = '';
  searchValue: string = '';
  dateDepart: string = '';
  dateDeRetour: string = '';
  paysArrive!: string;
  voyageur!: number;
  classes!: string[];

  constructor(
    private route: ActivatedRoute,
    private serviceVol: ListeVolService,
    private router: Router
  ) {

    this.route.params.subscribe(params => {
      this.paysDeDepart = params['paysDeDepart'];
      this.searchValue = params['searchValue'];
      this.dateDepart = params['dateDepart'];
      this.dateDeRetour = params['dateDeRetour'];
      this.classes =  params['classes'];
      this.paysArrive = params['paysArrive'];
      this.voyageur = params['voyageur']
    });
  }
  ngOnInit() {
    // Récupérer l'ID du vol à partir des paramètres de route
    this.volId = +this.route.snapshot.paramMap.get('id')!;

    // Charger les détails du vol à partir du service
    this.loadVolDetails();
  }

  loadVolDetails() {
    this.serviceVol.getVolById(this.volId).subscribe((data) => {
      this.vol = data;
      console.log("VOLEDATA",this.vol)
    });
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
