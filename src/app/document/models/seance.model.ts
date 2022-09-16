import {CommissionMember} from "./commission.model";
import {Journal} from "./journal.model";
import {Offer} from "./offer.model";

export class Seance {
  // offer part

  dateDelai:                    string;
  hourDelai:                    string;
  dateSuspend:                  string;
  hourSuspend:                  string;
  dateFaitLe:                   string;

  //offer Part
  isHasJournal:                number;
  isHasOfferSecond:            number;
  isHasOfferFirst:             number;
  isHasCommission:             number;
  seanceTitle:                  number;
  decisionNumber:               string;
  decisionDate:                string;
  dateOfCommission:            string;
  dateOfPortail:               string;
  hourOfPortail:               string;
  commissionMember:     CommissionMember[];
  commissionMemberFinal: CommissionMember[];
  journalDtoList:              Journal[];
  offerDtoList:                Offer[];
  isHasReception:              number;
  letterNumber:                string;
  letterDate:                  string;
  dateOfReception:             string;
  hourOfReception:             string;
  offerWinner:                 Offer;


}
