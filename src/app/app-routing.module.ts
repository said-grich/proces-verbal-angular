import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateDocumentComponent} from "./document/containers/create-document/create-document.component";
import {ListOfDocumentsComponent} from "./document/containers/list-of-documents/list-of-documents.component";

const routes: Routes = [
  {
    path:"add-new-document",component:CreateDocumentComponent
  },{
    path:"list-of-documents",component:ListOfDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
