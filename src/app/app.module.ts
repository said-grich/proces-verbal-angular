import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DocumentComponent } from './document/document.component';
import { CreateDocumentComponent } from './document/containers/create-document/create-document.component';
import { ListOfDocumentsComponent } from './document/containers/list-of-documents/list-of-documents.component';
import { AddSeanceModalComponent } from './document/components/add-seance-modal/add-seance-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SenceListComponent } from './document/components/sence-list/sence-list.component';
import { CommissionPartComponent } from './document/components/commission-part/commission-part.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { JournalPartComponent } from './document/components/journal-part/journal-part.component';
import { OfferPartComponent } from './document/components/offer-part/offer-part.component';
import { OfferModalComponent } from './document/components/offer-modal/offer-modal.component';
import { OfferModalDetailsComponent } from './document/components/offer-modal-details/offer-modal-details.component';
import { ReceptionPartComponent } from './document/components/reception-part/reception-part.component';
import { EditeSeanceModalComponent } from './document/components/edite-seance-modal/edite-seance-modal.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    CreateDocumentComponent,
    ListOfDocumentsComponent,
    AddSeanceModalComponent,
    OfferModalComponent,
    SenceListComponent,
    CommissionPartComponent,
    JournalPartComponent,
    OfferPartComponent,
    OfferModalDetailsComponent,
    ReceptionPartComponent,
    EditeSeanceModalComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCheckboxModule

  ],
  providers: [],
  entryComponents:[AddSeanceModalComponent,OfferModalComponent,OfferModalDetailsComponent,EditeSeanceModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
