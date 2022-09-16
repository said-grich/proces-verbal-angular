import { Component, OnInit } from '@angular/core';
import {AddSeanceModalComponent} from "../../components/add-seance-modal/add-seance-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocumentHelperService} from "../../helper/document-helper.service";
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  title="Créer un nouveaux document";
  // @ts-ignore
  documentForm: FormGroup ;
  constructor(public dialog: MatDialog ,private helper:DocumentHelperService ,private documentService:DocumentService) { }

  ngOnInit(): void {
    this.documentForm = this.helper.initDocumentForm();
  }
  openDialog(): void {
    this.documentService.setAllCheckBoxFalse();
    this.documentService.initSeanceForm();
    this.dialog.open(AddSeanceModalComponent,{
     minHeight:'80vh',
     width: '90%'
   });
  }

  createDoc(){
    this.documentService.creatNewDocument(this.documentForm.value);

  }




}
