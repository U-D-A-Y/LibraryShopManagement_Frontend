import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { LangService } from '../lang.service';

@Injectable({
    providedIn: 'root',
})
export class DashBoard{
    
    cardList=[
        {type:'book',count:0,icon:'fa fa-book',path:"books"},
        {type:'category',count:0,icon:'fa fa-cube',path:"categories"},
        {type:'customer',count:0,icon:'fa fa-users',path:"customers"},
        {type:'sales',count:0,icon:'fa fa-list-alt',path:"sale-detail"},
    ]
    constructor(private http: Http,   public langService:LangService,) {
        this.getTotalBooks()
        .subscribe(result=>{
            this.cardList[0].count=result[0].count;
        })
        this.getTotalCategories()
        .subscribe(result=>{
            this.cardList[1].count=result[0].count;
        })
        this.getTotalSales()
        .subscribe(result=>{
            this.cardList[3].count=result[0].count;
        })
        this.getTotalCustomers()
        .subscribe(result=>{
            this.cardList[2].count=result[0].count;
        })
     }
 

     getTotalCategories(){
        return this.http.getData('categories/count')
    }
     getTotalBooks(){
        return this.http.getData('books/count')
    }
     getTotalSales(){
        return this.http.getData('sales/count')
    }
     getTotalCustomers(){
        return this.http.getData('customers/count')
    }

    
}