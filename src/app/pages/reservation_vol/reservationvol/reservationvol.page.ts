import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular/standalone';
import { AnnulerReservService } from 'src/app/services/annuler-reservation/annuler-reserv.service';
import { FlightService } from 'src/app/services/figth/flight.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-reservation-vol',
  templateUrl: './reservationvol.page.html',
  standalone: true,
  imports: [NgIf, NgFor, IonDatetime],
  styleUrls: ['./reservationvol.page.scss'],
  providers: [DatePipe]
})
export class ReservationvolPage implements OnInit {

  public flights: Array<{ id: number, time: string, origin: string, destination: string, airline: string, depart: string, passengers: number, numvol: string, logoUrl: string, display: boolean }> = [];
  showModal: boolean = false;
  selectedFlight: any = null;
  isConfirmationModalVisible = false;
  isProcessingModalVisible = false;
  public passagerListvol: any;
  errorMessage: string = '';
  constructor(
    private router: Router,
    private flightService: FlightService,
    private loginService: LoginServiceService,
    private annulerReservService: AnnulerReservService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const utilisateurId = this.loginService.getUserId();
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
          id: reservation.id,
          time: this.getFormattedDate(reservation.vol.dateEtHeureArrivee),
          origin: this.truncateText(reservation.vol.aeroportDepart.nom, 8),
          destination: this.truncateText(reservation.vol.aeroportDArrivee.nom, 8),
          airline: this.truncateText(reservation.vol.adminCompagnie.compagnie.nom, 10),
          depart: this.getFormattedDate(reservation.vol.dateEtHeureDepart),
          numvol: reservation.vol.numeroDeVol,
          logoUrl: reservation.vol.adminCompagnie.compagnie.logoUrl,
          passengers: reservation.nombreDepassager,
          display: true // Initialement, toutes les réservations sont affichées
        }));
      },
      (err) => {
        console.error("Erreur lors de la récupération des vols: ", err);
      }
    );
  }

  truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  }

  getFormattedDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'dd-MM-yyyy') || '';
  }

  handleContainerClick(flight: any) {
    this.selectedFlight = flight;
    this.router.navigate(['page-details', { id: flight.id }], { state: { containerDetails: flight } });
  }

  openModal(event: Event) {
    event.stopPropagation();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmCancellation() {
    if (this.selectedFlight && this.selectedFlight.id) {
      this.annulerReservService.annulerReservation(this.selectedFlight.id)
        .subscribe(
          () => {
            console.log('Réservation annulée avec succès');
            this.isConfirmationModalVisible = false;
            this.isProcessingModalVisible = true;
            this.updateFlightDisplay(this.selectedFlight.id, false);
            this.closeModal();
          },
          (error) => {
            console.error('Erreur lors de l\'annulation de la réservation:', error);
            this.errorMessage = error.message; // Affiche le message d'erreur
          }
        );
    } else {
      console.error('Aucun vol sélectionné ou l\'ID est manquant');
    }
  }

  updateFlightDisplay(flightId: number, display: boolean) {
    this.flights = this.flights.map(flight => {
      if (flight.id === flightId) {
        return { ...flight, display: display };
      }
      return flight;
    });
  }

  closeProcessingModal() {
    this.isProcessingModalVisible = false;
  }

  retour() {
    window.history.back();
  }
}
