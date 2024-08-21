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
  // searchValue: string = '';
   dateDepart: string = '';
   dateDeRetour: string = '';
   paysArrive!: string;
   voyageur!: number;
   selectedClass: string = '';
  // classes!: string[];
  // // selectedTab!: number;
  // // listOfPays!: string[];
  // // filteredPaysDepart: string[] = [];
  // // filteredPaysDArrivee: string[] = [];
  // // showRetour!: boolean;

  aeroportDepart: any[] = [];
  aeroportDArrivee: string = '';
  dateEtHeureDepart: Date = new Date();
  villeDeDepart: string = '';
  villeDArrivee: string = '';
  vol:any[] = [];

  constructor(
    private router: Router,
    private serviceVol:ListeVolService,
    private route:ActivatedRoute,
    private alertController: AlertController
  ) {

    // this.route.params.subscribe(params => {
    //  console.log(params['villeDeDepart'])
    // });


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
        // const volDepart = vol.aeroportDepart.ville.nom.trim().toLowerCase();
        // const depart = vol.aeroportDepart[0].nom;
        // console.log('Filtering by Depart:', volDepart);
        // console.log('Filtering by Depart1:', depart);
        // return volDepart === depart;
        const volDepart = vol.aeroportDepart.ville.nom.trim().toLowerCase();
        const volArrivee = vol.aeroportDArrivee.ville.nom.trim().toLowerCase();
        const depart = this.villeDeDepart.trim().toLowerCase();
        const arrivee = this.villeDArrivee.trim().toLowerCase();
        return volDepart === depart && volArrivee === arrivee;
      });

      console.log('Filtered by Depart:', filteredVol);

      // Filtrage par ville d'arrivée
      // filteredVol = filteredVol.filter((vol: any) => {
      //   const volArrivee = vol.aeroportDArrivee.ville.nom.trim().toLowerCase();
      //   const arrivee = this.paysArrive.trim().toLowerCase();
      //   console.log('Filtering by Arrivee:', volArrivee, arrivee);
      //   return volArrivee === arrivee;
      // });
      // console.log('Filtered by Depart and Arrivee:', filteredVol);

      // Filtrage par date
      // filteredVol = filteredVol.filter((vol: any) => {
      //   const volDate = new Date(vol.dateEtHeureDepart).toDateString();
      //   const dateDepart = new Date(this.dateDepart).toDateString();
      //   console.log('Filtering by Date:', volDate, dateDepart);
      //   return volDate === dateDepart;
      // });

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

}
