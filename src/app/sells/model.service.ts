import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Book } from '../model/book.model';
import { Customer } from '../model/customer.model';

@Injectable({
    providedIn:'root'
})

export class Model{
    selectedAddItem=new Book();
    selectedCustomer:Customer
    bookQueueList:Array<Book>
    bookList=Array<Book>();
    customerList=Array<Customer>();
    backUpBookList=Array<Book>();
  
    commission
    totalWithoutCommission
    totalCommission
    totalWithCommission
    cash
    returnTk
    
    constructor(private http:Http){
        this.bookQueueList=[]
        this.commission=20
        this.cash=0
        
        this.selectedCustomer=new Customer();
        this.customerList=[]
    }

  
    getBookList(){
        this.http.getData('/books')
        .subscribe(result=>{
            this.bookList=result.map(item=>new Book(item))
            this.backUpBookList=JSON.parse(JSON.stringify(this.bookList))
        })
    }
    getCustomerList(){
        this.http.getData('/customers')
        .subscribe(result=>{
            this.customerList=result.map(item=>new Customer(item))
        })
    }
    onClickSelectedAddBtn(){

    }
}