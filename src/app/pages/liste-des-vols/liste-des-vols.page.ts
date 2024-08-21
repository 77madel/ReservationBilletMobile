import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
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
import {Vol} from "../../models/Vol";

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
  paysArrive!: string;
  voyageur!: number;
  classes!: string[];


  vol:any[] = [];

  constructor(private router: Router, private serviceVol:ListeVolService,private route:ActivatedRoute) {

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


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.villeDeDepart = params['villeDeDepart'];
      this.villeDArrivee = params['villeDArrivee'];
      this.dateDepart = params['dateDepart'];
      this.dateDeRetour = params['dateDeRetour'];
      this.voyageur = params['voyageur'];
      this.selectedClass = params['classe'];

      // Charger les vols en fonction des paramètres
      this.loadVol();
    });

  }


  async loadVol() {
    try {
      const response = await this.serviceVol.ListVol();

        this.vol = response;
      // Log des données réelles
      console.log('Response:', this.vol);

      // Filtrage par ville de départ
      let filteredVol = response.filter((vol: any) => {
        const volDepart = vol.aeroportDepart.ville.nom.trim().toLowerCase();
        const volArrivee = vol.aeroportDArrivee.ville.nom.trim().toLowerCase();
        const depart = this.villeDeDepart.trim().toLowerCase();
        const arrivee = this.villeDArrivee.trim().toLowerCase();
        return volDepart === depart && volArrivee === arrivee;
      });

      console.log('Filtered by Depart:', filteredVol);


      const dateDepart = new Date(this.dateDepart).toDateString();
      let filteredByDate = filteredVol.filter((vol: any) => {
        const volDate = new Date(vol.dateEtHeureDepart).toDateString();
        return volDate === dateDepart;
      });
      console.log('Filtered by Depart, Arrivee, and Date:', filteredVol);

      if (filteredVol.length > 0) {
        console.log('Filtered by Depart and Arrivee:', filteredVol);
        this.vol = filteredVol;
      } else {
        console.log('No flights available for the selected cities.');

        // Afficher un pop-up si aucun vol ne correspond
        const alert = await this.alertController.create({
          header: 'Vol non disponible',
          message: 'Aucun vol ne correspond à votre sélection.',
          buttons: [{
            text: 'OK',
            handler: () => {
              // Redirection vers le formulaire de recherche après avoir cliqué sur OK
              this.router.navigate(['/search-vol-form']);
            }
          }]
        });

        await alert.present();
      }

    } catch (error: any) {
      console.error('Error loading flights:', error);
    }
  }










  getFormattedTime(dateEtHeure: string): string {
    const date = new Date(dateEtHeure);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  getFirstThreeLetters(nom: string): string {
    return nom.substring(0, 3);
  }

  // viewVolDetail(volId: number): void {
  //   this.router.navigate(['/vol', volId]);
  // }

  viewVolDetail(volId: number): void {
    this.router.navigate(['/vol-selectionner', volId]);
  }


  // retour a la page precedente
  retour(): void {
    window.history.back();
  }


}
