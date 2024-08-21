import {Avion} from "./Avion";

export interface Vol {
  id: number;
  numeroDeVol: string;
  aeroportDepart: string;
  aeroportDArrivee: string;
  dateEtHeureArrivee: string;
  dateEtHeureDepart: string;
  tarifEconomiqueDeBase: number;
  avion: Avion;
}
