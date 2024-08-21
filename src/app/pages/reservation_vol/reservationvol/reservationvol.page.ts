import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/figth/flight.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { IonDatetime } from '@ionic/angular/standalone';
import { AnnulerReservService } from 'src/app/services/annuler-reservation/annuler-reserv.service';
import { DatePipe } from '@angular/common';  // Importez DatePipe

@Component({
  selector: 'app-reservation-vol',
  templateUrl: './reservationvol.page.html',
  standalone: true,
  imports: [NgIf, NgFor, IonDatetime],
  styleUrls: ['./reservationvol.page.scss'],
  providers: [DatePipe]  // Ajoutez DatePipe aux providers
})
export class ReservationvolPage implements OnInit {

  public flights: Array<{ id: number, time: string, origin: string, destination: string, airline: string, depart: string, passengers: number, numvol: string, logoUrl: string }> = [];
  showModal: boolean = false;
  selectedFlight: any = null;
  isConfirmationModalVisible = false;
  isProcessingModalVisible = false;
  public passagerListvol: any;

  constructor(
    private router: Router,
    private flightService: FlightService,
    private loginService: LoginServiceService,
    private annulerReservService: AnnulerReservService,
    private datePipe: DatePipe  // Injectez DatePipe
  ) {}

  ngOnInit() {
    const utilisateurId = this.loginService.getUserId();
    console.log("Id utilisateur:===============" + utilisateurId + '===================================');

    if (utilisateurId !== null) {
      this.loadFlights(utilisateurId);
    } else {
      console.error('Utilisateur non connecté');
    }
    this.confirmCancellation();
  }

  loadFlights(id: number) {
    this.flightService.getFlights(id).subscribe(
      (data) => {
        this.passagerListvol = data;
        this.flights = this.passagerListvol.map((reservation: any) => ({
          id: reservation.id,
          time: this.getFormattedDate(reservation.vol.dateEtHeureArrivee),
          origin: this.truncateText(reservation.vol.aeroportDepart, 8),  // Tronquer à 4 caractères
          destination: this.truncateText(reservation.vol.aeroportDArrivee, 8),  // Tronquer à 4 caractères
          airline: this.truncateText(reservation.vol.adminCompagnie.compagnie.nom, 10),  // Tronquer à 4 caractères
          depart: this.getFormattedDate(reservation.vol.dateEtHeureDepart),  // Tronquer à 4 caractères
          // depart: this.truncateText(reservation.vol.numeroDeVol, 4),  // Tronquer à 4 caractères
          numvol: reservation.vol.numeroDeVol,
          logoUrl:reservation.vol.adminCompagnie.compagnie.logoUrl,
          passengers: reservation.nombreDepassager  // Inclure le nombre de passagers
        }));

        console.log("Vols: ", this.flights);
      },
      (err) => {
        console.error("Erreur lors de la récupération des vols: ", err);
      }
    );
  }
  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);  // Tronquer le texte si plus long que maxLength
    }
    return text;  // Retourner le texte inchangé s'il est plus court que maxLength
  }


  getFormattedDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'dd-MM-yyyy') || '';  // Formate la date
  }
  // EEEE, d MMMM yyyy
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
    console.log("==============="+this.selectedFlight+"------"+ this.selectedFlight.id+"=============");
    if (this.selectedFlight.id) {
      this.annulerReservService.annulerReservation(this.selectedFlight.id)
        .subscribe(
          () => {
            console.log('Réservation annulée avec succès');
            this.isConfirmationModalVisible = false;
            this.isProcessingModalVisible = true;
            this.closeModal();
            this.loadFlights(this.loginService.getUserId());
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
