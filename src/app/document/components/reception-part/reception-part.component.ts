import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";
import {CommissionMember} from "../../models/commission.model";

@Component({
  selector: 'app-reception-part',
  templateUrl: './reception-part.component.html',
  styleUrls: ['./reception-part.component.css']
})
export class ReceptionPartComponent implements OnInit {
  commissionFormFinal: FormGroup  ;
  title:string="Reception :";

  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private  documentService:DocumentService) { }

  ngOnInit(): void {
   this.setCommissionMemberListFinal(this.documentService.commissionMember);
    this.commissionFormFinal=this.helper.initCommissionForm();
  }
  addCommissionMemberFinal(){
    if(this.commissionFormFinal.controls['name'].hasError('required')){
      this.helper.openSnackBarError("nom est manquant")
    }
    else if(this.commissionFormFinal.controls['desc'].hasError('required')){
      this.helper.openSnackBarError("description est manquant")
    }
    else if(this.commissionFormFinal.controls['role'].hasError('required')){
      this.helper.openSnackBarError("role est manquant")
    } else {
      this.getCommissionMemberListFinal().push(this.commissionFormFinal.value)
    }
  }
  getCommissionMemberListFinal(){
    return this.documentService.commissionMemberFinal;
  }
  setCommissionMemberListFinal(value:CommissionMember[]){
    this.documentService.commissionMemberFinal=[...value];
  }

  delete(value:CommissionMember){
    const index =  this.getCommissionMemberListFinal().indexOf(value, 0);
    if (index > -1) {
      this.getCommissionMemberListFinal().splice(index, 1);
    }
  }

}
