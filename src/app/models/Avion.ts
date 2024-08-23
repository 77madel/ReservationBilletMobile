import {Siege} from "./Siege";

export interface Avion {
  id: number;
  matricule: string;
  capaciteTotale: string;
  nom: string;
  statut: string;
  siege: Siege;
}
