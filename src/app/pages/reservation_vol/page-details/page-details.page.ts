import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon, CommonModule, FormsModule]
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
  constructor(private router: Router) {
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
    this.isConfirmationModalVisible = false;
    this.isProcessingModalVisible = true;
    this. closeModal();
  }

  closeProcessingModal() {
    this.isProcessingModalVisible = false;
  }

  // boutton retour en arrire
  retour() {
    window.history.back();
  }
}
