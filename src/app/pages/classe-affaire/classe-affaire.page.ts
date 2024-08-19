import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent, IonCardHeader, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonImg, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Siege} from "../../models/Siege";
import {SiegeService} from "../../service/siege/siege.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-classe-affaire',
  templateUrl: './classe-affaire.page.html',
  styleUrls: ['./classe-affaire.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonCardHeader,
    IonCardContent, IonCardTitle, IonCard
  ]
})
export class ClasseAffairePage implements OnInit {

  avionId!: number;
  Sieges: Siege[] = [];
  siegeSelectionne: Siege | null = null;

  constructor(private siegeService: SiegeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      //this.avionId = idParam ? +idParam : null; // Ou une valeur par défaut si nécessaire
      this.listSiege(); // Charge les sièges pour cet avion
      this.avionId = 1;
    });
  }

  listSiege(): void {
    this.siegeService.getSiege(this.avionId).subscribe(
      (response) => {
        this.Sieges = response;
        console.log(this.Sieges);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }

  getSiegeHubLot(): Siege[] {
    return this.Sieges.filter(siege => siege.positionSiege.nom === 'HUBLOT');
  }

  getSiegeMilieu(): Siege[] {
    return this.Sieges.filter(siege => siege.positionSiege.nom === 'MILIEU');
  }

  getSiegeCouloir(): Siege[] {
    return this.Sieges.filter(siege => siege.positionSiege.nom === 'COULOIR');
  }

  selectSiege(siege: Siege): void {
    if (siege.disponibilite === 'OUI') {
      // Permet de sélectionner ou désélectionner le siège
      this.siegeSelectionne = this.siegeSelectionne?.id === siege.id ? null : siege;
    }
  }


  isSelected(siege: Siege): boolean {
    return this.siegeSelectionne?.id === siege.id;
  }

}
