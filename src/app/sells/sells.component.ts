import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { Model } from './model.service';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
})
export class SellsComponent implements OnInit {

  constructor(public model:Model) { }

  ngOnInit(): void {
    this.loadBookList()
  }

  loadBookList(){
    this.model.getBookList()
  }

  onChooseList(book){
    console.log(book)
    this.model.selectedAddItem=book
  }

  onClickSelectedAddBtn(){
    this.model.bookList.find(item=>item.BOOK_PK==this.model.selectedAddItem.BOOK_PK).QUANTITY-=this.model.selectedAddItem.QUANTITY;
    this.model.bookQueueList.push(this.model.selectedAddItem);
    this.model.selectedAddItem=new Book();
  }

}
