import {Seance} from "./seance.model";

export interface Document {
  title:         string;
  aooNumber:     string;
  montant:       string;
  seances: Seance[];
}









