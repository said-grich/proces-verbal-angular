import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";
import {FormGroup} from "@angular/forms";
import {Offer} from "../../models/offer.model";

@Component({
  selector: 'app-offer-modal',
  templateUrl: './offer-modal.component.html',
  styleUrls: ['./offer-modal.component.css']
})
export class OfferModalComponent implements OnInit {
  offerForm: FormGroup  ;

  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private  documentService:DocumentService) { }

  ngOnInit(): void {
    this.offerForm=this.helper.initOfferForm();
  }
  OffersList(){
    return this.documentService.offersList;
  }
  addOffer(){

    if(this.offerForm.controls['name'].hasError('required')){
      this.helper.openSnackBarError("name est manquant")
    }
    else if(this.offerForm.controls['address'].hasError('required')){
      this.helper.openSnackBarError("address est manquant")
    }
    else if(this.offerForm.controls['montant'].hasError('required')){
      this.helper.openSnackBarError("montant est manquant")
    }else if(this.offerForm.controls['majoration'].hasError('required')){
      this.helper.openSnackBarError("majoration est manquant")
    } else {
      this.OffersList().push(this.offerForm.value)
    }
  }

}
