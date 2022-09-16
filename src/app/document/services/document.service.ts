import { Injectable } from '@angular/core';
import {Seance} from "../models/seance.model";
import {CommissionMember} from "../models/commission.model";
import Utils from "../helper/utile";
import {Journal} from "../models/journal.model";
import {Offer} from "../models/offer.model";
import {Document} from "../models/document.model";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private _isHaseCommissionPart :boolean = false;
  private _isHaseJournalPart :boolean = false;
  private _isHaseOfferPart :boolean = false;
  private _isHasReception :boolean = false;

  private _seanceList: Array<Seance> ;

  private _commissionMember: Array<CommissionMember>;
  private _commissionMemberFinal: Array<CommissionMember>;
  private _journals: Array<Journal>;
  private _offersList: Array<Offer>;


  private _currentOffer: Offer;
  private _currentSeance: Seance;
  constructor(private  http:HttpClient,private _snackBar: MatSnackBar) {

    this.commissionMember=[...Utils.FIXE_MEMBER];

  }


  get isHasReception(): boolean {
    return this._isHasReception;
  }

  set isHasReception(value: boolean) {
    this._isHasReception = value;
  }

  get isHaseJournalPart(): boolean {
    return this._isHaseJournalPart;
  }

  set isHaseJournalPart(value: boolean) {
    this._isHaseJournalPart = value;
  }

  get isHaseCommissionPart(): boolean {
    return this._isHaseCommissionPart;
  }

  set isHaseCommissionPart(value: boolean) {
    this._isHaseCommissionPart = value;
  }


  get commissionMemberFinal(): Array<CommissionMember> {
    if(this._commissionMemberFinal==null){
      this._commissionMemberFinal=new Array<CommissionMember>();
    }
    return this._commissionMemberFinal;
  }

  set commissionMemberFinal(value: Array<CommissionMember>) {
    this._commissionMemberFinal = value;
  }

  get seanceList(): Array<Seance> {
    if (this._seanceList==null){
      this._seanceList=new Array<Seance>();
    }
    return this._seanceList;
  }

  set seanceList(value: Array<Seance>) {
    this._seanceList = value;
  }

  get commissionMember(): Array<CommissionMember>  {
    if(this._commissionMember==null){
      this._commissionMember=new Array<CommissionMember>();
    }
    return this._commissionMember;
  }

  set commissionMember(value: Array<CommissionMember> ) {
    this._commissionMember = value;
  }


  get journals(): Array<Journal> {
    if(this._journals==null){
      this._journals=new Array<Journal>();
    }
    return this._journals;
  }


  get isHaseOfferPart(): boolean {
    return this._isHaseOfferPart;
  }

  set isHaseOfferPart(value: boolean) {
    this._isHaseOfferPart = value;
  }

  get offersList(): Array<Offer> {
    if(this._offersList==null){
      this._offersList=new Array<Offer>();
    }
    return this._offersList;
  }

  set offersList(value: Array<Offer>) {
    this._offersList = value;
  }

  set journals(value: Array<Journal>) {
    this._journals = value;
  }


  get currentOffer(): Offer {
    if(this._currentOffer==null){
      this._currentOffer=new Offer();
    }
    return this._currentOffer;
  }

  set currentOffer(value: Offer) {
    this._currentOffer = value;
  }


  get currentSeance(): Seance {
    if(this._currentSeance==null){
      this._currentSeance=new Seance();
    }
    return this._currentSeance;
  }

  set currentSeance(value: Seance) {
    this._currentSeance = value;
  }

  createNewSeance(seance:Seance){
    seance.isHasCommission=this.boolToInt(this.isHaseCommissionPart);
    seance.isHasOfferFirst=this.boolToInt(this.isHaseOfferPart);
    seance.isHasOfferSecond=this.boolToInt(this.isHaseOfferPart);
    seance.isHasJournal=this.boolToInt(this.isHaseJournalPart);
    seance.isHasReception=this.boolToInt(this.isHasReception);
    seance.commissionMember=[...this.commissionMember];
    seance.commissionMemberFinal=[...this.commissionMemberFinal];
    seance.offerDtoList=[...this.offersList];
    seance.journalDtoList=[...this.journals];
    console.log(seance);
    this.seanceList.push(seance);

  }
  editeSeance(seance:Seance){
    this.setAllCheckBoxFalse();
    console.log(seance)
    this.journals=[...seance.journalDtoList]
    this.commissionMember=[...seance.commissionMember]
    this.offersList=[...seance.offerDtoList]
    this.commissionMemberFinal=[...seance.commissionMemberFinal];
    console.log(this.offersList)

  }
  updateSeance(value:Seance){
    const index =  this.seanceList.indexOf(this.currentSeance, 0);
    if (index > -1) {
      this.seanceList.splice(index, 1);
    }

    this.createNewSeance(value);
  }
  deleteSeance(value:Seance){
    const index =  this.seanceList.indexOf(value, 0);
    if (index > -1) {
      this.seanceList.splice(index, 1);
    }
  }

  setAllCheckBoxFalse(){
    this._isHaseCommissionPart=false;
    this._isHaseJournalPart=false;
    this._isHaseOfferPart=false;
    this._isHaseOfferPart=false;
    this._isHasReception=false;
  }

  initAllCheckBoxFalse(seance:Seance){
    this._isHaseCommissionPart=this.intToBool(seance.isHasCommission);
    this._isHaseJournalPart=this.intToBool(seance.isHasJournal);
    this._isHaseOfferPart=this.intToBool(seance.isHasOfferFirst);
    this._isHasReception=this.intToBool(seance.isHasReception);
  }

  initSeanceForm(){
    this.setAllCheckBoxFalse();
    this.journals.splice(0);
    this.commissionMember.splice(0);
    this.offersList.splice(0);
    this.commissionMemberFinal.splice(0);
    this.commissionMember=[...Utils.FIXE_MEMBER];
    this.commissionMemberFinal=[... this.commissionMember];
  }


  boolToInt(value:boolean){
    if(value){
      return 1
    }else{
      return 0
    }
  }
  intToBool(value:number){
    if(value==1){
      return true
    }else {
      return false;
    }
}

  creatNewDocument(document:Document){

    document.seances=this.seanceList;

    this.http.post("http://localhost:8091/api/document/create-new-doc/",document,{
      responseType: 'blob'
    }).subscribe(
      blob => saveAs(blob,document.title+".docx"),
      data =>{
        console.log(data);
      }
    );

  }



  openSnackBarError(msg:string) {
    this._snackBar.open(msg, '', {
      duration:1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass:['error-snackbar']
    });
  }
  openSnackBarSuccess(msg:string) {
    this._snackBar.open(msg, '', {
      duration:1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass:['success-snackbar']
    });
  }


}
