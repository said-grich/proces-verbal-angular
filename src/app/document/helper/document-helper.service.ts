import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Offer} from "../models/offer.model";
import {Seance} from "../models/seance.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentHelperService {

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) { }
  initDocumentForm(){
    return   this.fb.group({
        title: ['', Validators.required],
        documentNumber: ['', [Validators.required]],
        montant: ['', [Validators.required],],
        objet: ['', [Validators.required],],
      },

    );
  }
  initCommissionForm(){
    return   this.fb.group({
        name: ['', Validators.required],
        desc: ['', [Validators.required]],
        role: ['', [Validators.required],],
      },

    );
  }
  initJournalForm(){
    return   this.fb.group({
      journalName: ['', Validators.required],
      journalNumber: ['', Validators.required],
      journalDate: ['', [Validators.required]],
      journalPage: ['', [Validators.required],],
      },

    );
  }
  initOfferForm(){
    return   this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      isOnline: [false],
      isRejectedBeforeMaj: [false],
      isRejectedAfterMaj: [false],
      motifBeforeMaj: ['', [],],
      motifAfterMaj: ['', [],],
      isWithReserve: [0, [],],
      majoration: ['', [Validators.required],],
      montant: ['', [Validators.required],],
      reserve: [''],
      },

    );
  }
  initDetailsOfferForm(offer?:Offer){
    return   this.fb.group({
        name: [offer?.name, Validators.required],
        address: [offer?.address, Validators.required],
        isOnline: [offer?.isOnline],
        isRejectedBeforeMaj: [offer?.isRejectedBeforeMaj],
        isRejectedAfterMaj: [offer?.isRejectedAfterMaj],
        motifBeforeMaj: [offer?.motifBeforeMaj, [],],
        motifAfterMaj: [offer?.motifAfterMaj, [],],
        isWithReserve: [offer?.isWithReserve, [],],
        majoration: [offer?.majoration, [Validators.required],],
        montant: [offer?.montant, [Validators.required],],
        reserve: [offer?.reserve],
      },
    );
  }
  initSeanceForm(){
    return   this.fb.group({
      dateDelai:             ["", Validators.required],
      hourDelai:                   ["", Validators.required],
      dateSuspend:                 ["", Validators.required],
      hourSuspend:                 ["", Validators.required],
      dateFaitLe:                  ["", Validators.required],
      isHasJournal:               ["", Validators.required],
      isHasOfferSecond:           ["", Validators.required],
      isHasOfferFirst:            ["", Validators.required],
      isHasCommission:            ["", Validators.required],
      seanceTitle:                  ["", Validators.required],
      decisionNumber:              ["", Validators.required],
      decisionDate:               ["", Validators.required],
      dateOfCommission:           ["", Validators.required],
      dateOfPortail:              ["", Validators.required],
      hourOfPortail:              ["", Validators.required],
      isHasReception:               ["", Validators.required],
      letterNumber:                 ["", Validators.required],
      letterDate:                   ["", Validators.required],
      dateOfReception:              ["", Validators.required],
      hourOfReception:              ["", Validators.required]


    });
  }
  initEditeSeanceForm(seance:Seance){
    return   this.fb.group({
      dateDelai:             [seance.dateDelai, Validators.required],
      hourDelai:                   [seance.hourDelai, Validators.required],
      dateSuspend:                 [seance.dateSuspend, Validators.required],
      hourSuspend:                 [seance.hourSuspend, Validators.required],
      dateFaitLe:                  [seance.dateFaitLe, Validators.required],
      isHasJournal:               [this.intToBool(seance.isHasJournal), Validators.required],
      isHasOfferSecond:           [this.intToBool(seance.isHasOfferSecond), Validators.required],
      isHasOfferFirst:            [this.intToBool(seance.isHasOfferFirst), Validators.required],
      isHasCommission:            [this.intToBool(seance.isHasCommission), Validators.required],
      seanceTitle:                  [seance.seanceTitle, Validators.required],
      decisionNumber:              [seance.decisionNumber, Validators.required],
      decisionDate:               [seance.decisionDate, Validators.required],
      dateOfCommission:           [seance.dateOfCommission, Validators.required],
      dateOfPortail:              [seance.dateOfPortail, Validators.required],
      hourOfPortail:              [seance.hourOfPortail, Validators.required],
      isHasReception:               [this.intToBool(seance.isHasReception), Validators.required],
      letterNumber:                 [seance.letterNumber, Validators.required],
      letterDate:                   [seance.letterDate, Validators.required],
      dateOfReception:              [seance.dateOfReception, Validators.required],
      hourOfReception:              [seance.hourOfReception, Validators.required]


    });
  }
  openSnackBarError(msg:string) {
    this._snackBar.open(msg, 'X', {
      duration:1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass:['error-snackbar']
    });
  }

  intToBool(value: number | undefined) {
    if (value == 1) {
      return true
    } else {
      return false;
    }
  }


}
