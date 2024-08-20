import {Utilisateur} from "./Utilisateur";
import {Vol} from "./Vol";

export interface Reservation {
  id: number;
  dateReservation: string;
  nombreDepassager: number;
  statut: string;
  dateAnnulation: string;
  raisonAnnulation: string;
  vol: Vol;
}
