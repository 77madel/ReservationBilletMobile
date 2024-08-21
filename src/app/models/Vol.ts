export interface Vol {
  id: number;
  dateEtHeureDepart: string;
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
