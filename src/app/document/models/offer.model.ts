export class Offer {
  name:                string;
  address:             string;
  isOnline:            boolean=false;
  isRejectedBeforeMaj: boolean=false;
  isRejectedAfterMaj:  boolean=false;
  motifAfterMaj:       string;
  motifBeforeMaj:     string;
  isWithReserve:       number=0;
  majoration:          number;
  montant:             number;
  reserve:            string;
}
