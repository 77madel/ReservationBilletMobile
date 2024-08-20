import {ClasseSiege} from "./ClasseSiege";

export interface PositionSiege {
  id: number;
  nom: string;
  tarif: number;
  classeSiege: ClasseSiege;
}
