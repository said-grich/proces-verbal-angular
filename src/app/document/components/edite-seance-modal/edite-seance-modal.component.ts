import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DocumentService} from "../../services/document.service";
import {DocumentHelperService} from "../../helper/document-helper.service";

@Component({
  selector: 'app-edite-seance-modal',
  templateUrl: './edite-seance-modal.component.html',
  styleUrls: ['./edite-seance-modal.component.css']
})
export class EditeSeanceModalComponent implements OnInit {

  seanceForm:FormGroup;
  public isHasCommissionPart:any;
  public isHasJournalPart:any;
  public isHasOfferPart:any;
  public isHasReception:any;
  constructor(private documentService:DocumentService,private helper:DocumentHelperService) { }

  ngOnInit(): void {
    this.seanceForm=this.helper.initEditeSeanceForm(this.documentService.currentSeance);
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

  onSubmit(){
    this.documentService.updateSeance(this.seanceForm.value);
  }
}
