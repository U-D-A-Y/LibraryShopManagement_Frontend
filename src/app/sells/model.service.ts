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
    
    constructor(private http:Http){
        this.bookQueueList=[]
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