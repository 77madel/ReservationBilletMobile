import { Reservation } from "./Reservation";
import { Utilisateur } from "./Utilisateur";

export interface Notification {
  id: number;
  objet: string;
  date: string;
  heure: string;
  utilisateur: Utilisateur;
  reservation: Reservation;
}
