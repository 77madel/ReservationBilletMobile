import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-vol',
  templateUrl: './reservationvol.page.html',
  styleUrls: ['./reservationvol.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class ReservationvolPage {
  public flights: Array<{ time: string, origin: string, destination: string, airline: string, depart: string }> = [
    { time: '08:30 AM', origin: 'CHE', destination: 'BLR', airline: 'Maroc', depart: '08:30 AM' },
    { time: '09:00 AM', origin: 'DEL', destination: 'BOM', airline: 'Gabon', depart: '09:00 AM' },
    { time: '11:00 AM', origin: 'HGR', destination: 'YTU', airline: 'Mali', depart: '11:00 AM' },
    { time: '12:00 AM', origin: 'KIU', destination: 'FDS', airline: 'Ivoire', depart: '12:00 AM' },
    { time: '16:00 AM', origin: 'BNV', destination: 'MLP', airline: 'Senegale', depart: '16:00 AM' }
  ];

  showModal: boolean = false;
  selectedFlight: any = null;
  isConfirmationModalVisible = false;
  isProcessingModalVisible = false;
  constructor(private router: Router) { }

  handleContainerClick(flight: { time: string, origin: string, destination: string, airline: string, depart: string }) {
    this.selectedFlight = flight;
    // Rediriger vers la page de détail avec les informations du vol
    this.router.navigate(['page-details'], { state: { containerDetails: flight } });
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
}
