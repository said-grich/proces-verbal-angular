import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {FormGroup} from "@angular/forms";
import {DocumentHelperService} from "../../helper/document-helper.service";

@Component({
  selector: 'app-add-seance-modal',
  templateUrl: './add-seance-modal.component.html',
  styleUrls: ['./add-seance-modal.component.css']
})
export class AddSeanceModalComponent implements OnInit {

  seanceForm:FormGroup;
  public isHasCommissionPart:any;
  public isHasJournalPart:any;
  public isHasOfferPart:any;
  public isHasReception:any;
  constructor(private documentService:DocumentService,private helper:DocumentHelperService) { }

  ngOnInit(): void {
    this.seanceForm=this.helper.initSeanceForm();
  }
  getIsHasCommissionPart(){
    return this.documentService.isHaseCommissionPart;
  }
  setIsHasCommissionPart(){
    return this.documentService.isHaseCommissionPart=this.isHasCommissionPart;
  }
  getIsHasJournalPart(){
    return this.documentService.isHaseJournalPart;
  }
  setIsHasJournalPart(){
    return this.documentService.isHaseJournalPart=this.isHasJournalPart;
  }
  getIsHasOfferPart(){
    return this.documentService.isHaseOfferPart;
  }
  setIsHasOfferPart(){
    return this.documentService.isHaseOfferPart=this.isHasOfferPart;
  }

  getIsHasReception(){
    return this.documentService.isHasReception;
  }
  setIsHasReception(){
    return this.documentService.isHasReception=this.isHasReception;
  }

  onSubmit() {
    if (this.seanceForm.controls['seanceTitle'].hasError('required')) {
      this.helper.openSnackBarError("name est manquant")
    } else {
      this.documentService.createNewSeance(this.seanceForm.value);
    }
  }

}
