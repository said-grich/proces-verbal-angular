import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-list-of-documents',
  templateUrl: './list-of-documents.component.html',
  styleUrls: ['./list-of-documents.component.css']
})
export class ListOfDocumentsComponent implements OnInit {
  title="List des Document";
  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
    this.documentService.findAll();
  }

  getListOfDocument(){
    return this.documentService.listOfDocument
  }
  download(row:string){
    this.documentService.download(row);
  }

}
