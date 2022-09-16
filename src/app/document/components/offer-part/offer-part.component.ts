import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";
import {Offer} from "../../models/offer.model";
import {OfferModalComponent} from "../offer-modal/offer-modal.component";
import {OfferModalDetailsComponent} from "../offer-modal-details/offer-modal-details.component";

@Component({
  selector: 'app-offer-part',
  templateUrl: './offer-part.component.html',
  styleUrls: ['./offer-part.component.css']
})
export class OfferPartComponent implements OnInit {

  title="Offers :";

  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private  documentService:DocumentService) { }

  ngOnInit(): void {
  }

  OffersList(){
    return this.documentService.offersList;
  }
  delete(value:Offer){
    const index =  this.OffersList().indexOf(value, 0);
    if (index > -1) {
      this.OffersList().splice(index, 1);
    }
  }
  edite(value:Offer){
    this.setCurrentOffer(value);
    this.dialog.open(OfferModalDetailsComponent,{
      minHeight:'50vh',
      width: '100%'
    });
  }
  openDialog(): void {
    this.dialog.open(OfferModalComponent,{
      minHeight:'50vh',
      width: '80%'
    });
  }

  setCurrentOffer(row:Offer){
       this.documentService.currentOffer=row;

  }

}
