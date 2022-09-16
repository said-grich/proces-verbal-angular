import {Seance} from "./seance.model";

export interface Document {
  title:         string;
  objet:         string;
  aooNumber:     string;
  montant:       string;

  seances: Seance[];
}









