import {Avion} from "./Avion";

export interface Vol {
  id: number;
  numeroDeVol: string;
  dateEtHeureDepart: string;
  tarifEconomiqueDeBase: number;
  avion: Avion;
  dateEtHeureArrivee: string;
  aeroportDepart: {
    ville: {
      nom: string;
    };
  };
  aeroportDArrivee: {
    ville: {
      nom: string;
    };
  };
  adminCompagnie: {
    compagnie: {
      nom: string;
    };
  };
}
