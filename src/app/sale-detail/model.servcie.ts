import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Book } from '../model/book.model';
import { Publisher } from '../model/publisher.model';
@Injectable({
  providedIn: "root"
})
export class Model {

  salesDetailsList: []
  startDate:Date
  endDate:Date
  constructor(private Http: Http) {
    this.salesDetailsList = [];
  }

  getSaleDetails() {
    this.Http.getData(`sales-details/${this.startDate}/${this.endDate}`)
      .subscribe(result => {
         
        console.log(result)
      })
  }



}