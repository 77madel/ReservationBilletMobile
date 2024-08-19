import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonImg,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ellipse } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { SiegeService } from '../../service/siege/siege.service';
import { Siege } from '../../models/Siege';

addIcons({ ellipse });

@Component({
  selector: 'app-classe-economique',
  templateUrl: './classe-economique.page.html',
  styleUrls: ['./classe-economique.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonCardHeader,
    IonCardContent, IonCardTitle, IonCard
  ]
})
export class ClasseEconomiquePage implements OnInit {

  Sieges: Siege[] = [];
  siegeSelectionne: Siege | null = null;

  constructor(private siegeService: SiegeService) {}

  ngOnInit(): void {
    this.listSiege();
  }

  listSiege(): void {
    this.siegeService.getSiege().subscribe(
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
