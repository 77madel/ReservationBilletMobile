import {Avion} from "./Avion";
import {PositionSiege} from "./PositionSiege";

export interface Siege {
  id: number;
  numero: string;
  disponibilite: string;
  positionSiege: PositionSiege;
  avion: Avion;

}

