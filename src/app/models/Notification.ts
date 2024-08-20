import {Utilisateur} from "./Utilisateur";
import {Reservation} from "./Reservation";

export interface Notification {
  id: number;
  objet: string;
  date: string;
  heure: string;
  utilisateur: Utilisateur;
  reservation: Reservation;
}
