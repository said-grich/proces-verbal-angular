import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";
import {CommissionMember} from "../../models/commission.model";

@Component({
  selector: 'app-commission-part',
  templateUrl: './commission-part.component.html',
  styleUrls: ['./commission-part.component.css']
})
export class CommissionPartComponent implements OnInit {

  commissionForm: FormGroup  ;
  title:string="Commission :";

  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private  documentService:DocumentService) { }

  ngOnInit(): void {
    this.commissionForm=this.helper.initCommissionForm();
  }
  addCommissionMember(){
    if(this.commissionForm.controls['name'].hasError('required')){
      this.helper.openSnackBarError("nom est manquant")
    }
    else if(this.commissionForm.controls['desc'].hasError('required')){
      this.helper.openSnackBarError("description est manquant")
    }
    else if(this.commissionForm.controls['role'].hasError('required')){
      this.helper.openSnackBarError("role est manquant")
    } else {
      this.getCommissionMemberList().push(this.commissionForm.value)
    }
  }
  getCommissionMemberList(){
    return this.documentService.commissionMember;
  }
  delete(value:CommissionMember){
    const index =  this.getCommissionMemberList().indexOf(value, 0);
    if (index > -1) {
      this.getCommissionMemberList().splice(index, 1);
    }
  }
}
