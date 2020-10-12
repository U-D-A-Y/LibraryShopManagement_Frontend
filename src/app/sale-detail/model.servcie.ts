import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Book } from '../model/book.model';
import { Publisher } from '../model/publisher.model';
import { SalesDetail } from '../model/sales-detail.model';
@Injectable({
  providedIn: "root"
})
export class Model {

  salesDetailsList: Array<SalesDetail>=[]
  startDate:Date
  endDate:Date
  bsConfig:any
  total:number
  netTotal:number
  constructor(private Http: Http) {
    this.endDate=new Date();
    this.startDate=new Date();
    this.startDate.setDate(this.endDate.getDate()-30);
    this.bsConfig={ dateInputFormat: 'DD/MM/YYYY' }
    this.total=0;
    this.netTotal=0;
  }

  getSaleDetails() {
    this.Http.getData(`sales-details/${this.startDate.toJSON().split('T')[0]}/${this.endDate.toJSON().split('T')[0]}`)
      .subscribe(result => {
        this.salesDetailsList=result.map(item=>new SalesDetail(item))
        this.total=this.salesDetailsList.map(item=>item.TOTAL).reduce((acc,item)=>acc+=item)
        this.netTotal=this.salesDetailsList.map(item=>item.NET_TOTAL).reduce((acc,item)=>acc+=item)
      })
  }



}