import { Component, OnInit } from '@angular/core';
import {Seance} from "../../models/seance.model";
import {DocumentService} from "../../services/document.service";
import {AddSeanceModalComponent} from "../add-seance-modal/add-seance-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {EditeSeanceModalComponent} from "../edite-seance-modal/edite-seance-modal.component";

@Component({
  selector: 'app-sence-list',
  templateUrl: './sence-list.component.html',
  styleUrls: ['./sence-list.component.css']
})
export class SenceListComponent implements OnInit {

  constructor(public dialog: MatDialog,private  documentService:DocumentService) { }

  ngOnInit(): void {
  }

  getSeanceList() :Array<Seance>{
    return this.documentService.seanceList;
  }
  edite(row:Seance){
    this.documentService.currentSeance=row;
    this.documentService.editeSeance(row);
    this.dialog.open(EditeSeanceModalComponent,{
      minHeight:'40vh',
      width: '90%'
    });
  }

  delete(row:Seance){
    this.documentService.deleteSeance(row);
  }

}
