import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth-service/auth.service';
import { ReservationVolService } from 'src/app/services/reservationVol/reservation-vol.service';
import { ListeVolService } from "../../services/ListeVol/liste-vol.service";

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
  public details: any;

  paysDeDepart: string = '';
  searchValue: string = '';
  dateDepart: string = '';
  dateDeRetour: string = '';
  paysArrive!: string;
  voyageur!: number;
  classes!: string[];
  villeDeDepart!: string;
  villeDArrivee!: string;
  classe!: string;
  
  constructor(
    private route: ActivatedRoute,
    private serviceVol: ListeVolService,
    private router: Router,
    private authService: AuthService, // Injection du service d'authentification
    private reservationService: ReservationVolService,
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

    // Récupérer les autres paramètres via queryParams
    this.route.queryParams.subscribe(params => {
      this.villeDeDepart = params['villeDeDepart'];
      this.villeDArrivee = params['villeDArrivee'];
      this.dateDepart = params['dateDepart'];
      this.dateDeRetour = params['dateDeRetour'];
      this.voyageur = params['voyageur'];
      this.classe = params['classe'];
    });

    // Utiliser les paramètres pour charger les détails du vol
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

  ajouterReservation() {
    const reservation = {
      vol: this.vol,
      nombreDepassager: this.voyageur,
      dateReservation: new Date(),
      // Ajoutez les autres champs nécessaires pour la réservation
    };
  
    this.reservationService.ajouterReservation(reservation).subscribe(response => {
      console.log('Réservation ajoutée', response);
      this.router.navigate(['/InformationPassagerPage'], {
        queryParams: {
          volId: this.vol.id,
          volDetails: JSON.stringify(this.vol), // Vous pouvez envoyer l'objet vol sous forme de chaîne JSON
          nombreDepassager: this.voyageur
        }
      });
    }, error => {
      console.error('Erreur lors de l\'ajout de la réservation', error);
    });
  }
}
