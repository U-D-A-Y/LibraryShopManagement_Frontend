import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Book } from '../model/book.model';

@Injectable({
    providedIn:'root'
})

export class Model{
    selectedAddItem=new Book();
    bookQueueList:Array<Book>
    bookList=Array<Book>();
  
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
    }

  
    getBookList(){
        this.http.getData('/books')
        .subscribe(result=>{
            this.bookList=result.map(item=>new Book(item))
        })
    }
    onClickSelectedAddBtn(){

    }
}