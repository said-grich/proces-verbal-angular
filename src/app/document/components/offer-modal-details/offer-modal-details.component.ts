import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-offer-modal-details',
  templateUrl: './offer-modal-details.component.html',
  styleUrls: ['./offer-modal-details.component.css']
})
export class OfferModalDetailsComponent implements OnInit {

  offerForm: FormGroup  ;

  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private  documentService:DocumentService) { }

  ngOnInit(): void {

    this.offerForm=this.helper.initDetailsOfferForm(this.getCurrentOffer());
  }
  OffersList(){
    return this.documentService.offersList;
  }
  editeOffer(){
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
      const index =  this.OffersList().indexOf(this.documentService.currentOffer, 0);
      if (index > -1) {
        this.OffersList().splice(index, 1);
      }

      this.OffersList().push(this.offerForm.value)

    }
  }
  getCurrentOffer(){
    return this.documentService.currentOffer;
  }
}
