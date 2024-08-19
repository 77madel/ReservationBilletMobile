import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/figth/flight.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-reservation-vol',
  templateUrl: './reservationvol.page.html',
  standalone:true,
  imports:[NgFor, NgIf],
  styleUrls: ['./reservationvol.page.scss']
})
export class ReservationvolPage implements OnInit {

  public flights: Array<{ time: string, origin: string, destination: string, airline: string, depart: string }> = [];
  showModal: boolean = false;
  selectedFlight: any = null;
  isConfirmationModalVisible = false;
  isProcessingModalVisible = false;
  public passagerListvol: any;

  constructor(
    private router: Router,
    private flightService: FlightService,
    private loginService: LoginServiceService
  ) {}

  ngOnInit() {
    const utilisateurId = this.loginService.getUserId(); // Récupérer l'ID de l'utilisateur connecté
    console.log("Id utilisateur:===============" + utilisateurId + '===================================');

    if (utilisateurId !== null) {
      this.loadFlights(utilisateurId);
    } else {
      console.error('Utilisateur non connecté');
    }
  }

  loadFlights(id: number) {
    this.flightService.getFlights(id).subscribe(
      (data) => {
        this.passagerListvol = data;
        this.flights = this.passagerListvol.map((reservation: any) => ({
          time: reservation.vol.dateEtHeureDepart,
          origin: reservation.vol.aeroportDepart,
          destination: reservation.vol.aeroportDArrivee,
          airline: reservation.vol.adminCompagnie.compagnie.nom,
          depart: reservation.vol.numeroDeVol
        }));
        console.log("Vols: ", this.flights);
      },
      (err) => {
        console.error("Erreur lors de la récupération des vols: ", err);
      }
    );
  }

  handleContainerClick(flight: any) {
    this.selectedFlight = flight;
    this.router.navigate(['page-details', { id: flight.time }], { state: { containerDetails: flight } });
  }

  openModal(event: Event) {
    event.stopPropagation();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmCancellation() {
    this.isConfirmationModalVisible = false;
    this.isProcessingModalVisible = true;
    this.closeModal();
  }

  closeProcessingModal() {
    this.isProcessingModalVisible = false;
  }
}
