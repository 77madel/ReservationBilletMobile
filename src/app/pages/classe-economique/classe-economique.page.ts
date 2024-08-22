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
import {ActivatedRoute, Route, Router} from "@angular/router";
import { IonicModule } from '@ionic/angular';

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

  avionId!: number | null;
  Sieges: Siege[] = [];
  siegeSelectionne: Siege | null = null;
  tooltipVisible = false;

  constructor(private siegeService: SiegeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.avionId = idParam ? +idParam : null; // Ou une valeur par défaut si nécessaire
      this.listSiege(); // Charge les sièges pour cet avion
      //this.avionId = 1;
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
    return this.Sieges.filter(siege =>
      siege.positionSiege.nom === 'HUBLOT' &&
      siege.positionSiege.classeSiege.nom === 'ECONOMIQUE'
    );
  }

  getSiegeMilieu(): Siege[] {
    return this.Sieges.filter(siege =>
      siege.positionSiege.nom === 'MILIEU' &&
      siege.positionSiege.classeSiege.nom === 'ECONOMIQUE'
    );
  }

  getSiegeCouloir(): Siege[] {
    return this.Sieges.filter(siege =>
      siege.positionSiege.nom === 'COULOIR' &&
      siege.positionSiege.classeSiege.nom === 'ECONOMIQUE'
    );
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

  showTooltip(siege: Siege): void {
    this.tooltipVisible = true;
  }

  hideTooltip(): void {
    this.tooltipVisible = false;
  }

  navigateToPageInfoPassager(): void {
    if (this.siegeSelectionne) {
      this.router.navigate(['/InformationPassagerPage'], { state: { siege: this.siegeSelectionne } });
    }
  }
}
