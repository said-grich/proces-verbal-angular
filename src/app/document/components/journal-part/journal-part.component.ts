import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";
import {CommissionMember} from "../../models/commission.model";
import {Journal} from "../../models/journal.model";

@Component({
  selector: 'app-journal-part',
  templateUrl: './journal-part.component.html',
  styleUrls: ['./journal-part.component.css']
})
export class JournalPartComponent implements OnInit {
  title="Journal :";
  journalForm: FormGroup  ;

  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private  documentService:DocumentService) { }

  ngOnInit(): void {
    this.journalForm=this.helper.initJournalForm();
  }
  addJournal(){
    if(this.journalForm.controls['journalName'].hasError('required')){
      this.helper.openSnackBarError("nom est manquant")
    }
    else if(this.journalForm.controls['journalNumber'].hasError('required')){
      this.helper.openSnackBarError("Numéro est manquant")
    }
    else if(this.journalForm.controls['journalPage'].hasError('required')){
      this.helper.openSnackBarError("Page est manquant")
    }else if(this.journalForm.controls['journalDate'].hasError('required')){
      this.helper.openSnackBarError("Date est manquant")
    } else {
      this.journalist().push(this.journalForm.value)
    }
  }
  journalist(){
    return this.documentService.journals;
  }
  delete(value:Journal){
    const index =  this.journalist().indexOf(value, 0);
    if (index > -1) {
      this.journalist().splice(index, 1);
    }
  }

}
