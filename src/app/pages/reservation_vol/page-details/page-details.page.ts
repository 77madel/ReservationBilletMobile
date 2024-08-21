import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AnnulerReservService } from 'src/app/services/annuler-reservation/annuler-reserv.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon, CommonModule, FormsModule, NgOptimizedImage]
})
export class PageDetailsPage implements OnInit {
  public details: any;
  public flightDate: string;
  public flightTime: string;
  public price: string = '350 USD';

  //jhhhhhhhh
  showModal: boolean = false;
  selectedFlight: any = null;
  isConfirmationModalVisible = false;
  isProcessingModalVisible = false;
  constructor(private router: Router,
    private annulerReservService: AnnulerReservService // Injecter le service ici
  ) {
    this.flightDate = new Date().toISOString().split('T')[0]; // Date actuelle
    this.flightTime = '08:30'; // Heure par défaut

  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.details = navigation.extras.state['containerDetails'];
      console.log('Received details in PageDetails:', this.details);
    } else {
      console.log('No details received');
    }
  }




  goBack() {
    this.router.navigate(['reservationvol']);
  }

  openModal(event: Event) {
    event.stopPropagation();  // Empêche le clic de se propager au conteneur
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmCancel() {
    // Logique pour confirmer l'annulation du vol
    this.showModal = false;
  }
//secondModal
confirmCancellation() {
  console.log("==============="+this.selectedFlight+"------"+ this.selectedFlight.id+"=============");
  if (this.selectedFlight.id) {
    this.annulerReservService.annulerReservation(this.selectedFlight.id)
      .subscribe(
        () => {
          console.log('Réservation annulée avec succès');
          this.isConfirmationModalVisible = false;
          this.isProcessingModalVisible = true;
          this.closeModal();
          // this.loadFlights(this.loginService.getUserId());
        },
        (error) => {
          console.error('Erreur lors de l\'annulation de la réservation:', error);
          console.error('Détails de l\'erreur:', error.message);
          console.error('Statut de l\'erreur:', error.status);
        }
      );
  } else {
    console.error('Aucun vol sélectionné ou l\'ID est manquant');
  }
}
  closeProcessingModal() {
    this.isProcessingModalVisible = false;
  }
}
