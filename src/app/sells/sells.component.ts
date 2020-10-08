import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { Customer } from '../model/customer.model';
import { Model } from './model.service';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
})
export class SellsComponent implements OnInit {

  constructor(public model:Model) { }

  ngOnInit(): void {
    this.loadBookList()
    this.loadCustomerList();
  }

  loadBookList(){
    this.model.getBookList()
  }
  loadCustomerList(){
    this.model.getCustomerList()
  }

  onChooseList(book){
    this.model.selectedAddItem=book
  }
  onChooseCustomer(customer){
    this.model.selectedCustomer=customer
    console.log(customer)
  }

  onClickSelectedAddBtn(){
    this.model.bookList.find(item=>item.BOOK_PK==this.model.selectedAddItem.BOOK_PK).QUANTITY-=this.model.selectedAddItem.QUANTITY;
    if(this.model.bookQueueList.some(item=>item.BOOK_PK==this.model.selectedAddItem.BOOK_PK)){
      
      this.model.bookQueueList.find(item=>item.BOOK_PK==this.model.selectedAddItem.BOOK_PK).QUANTITY=Number(this.model.bookQueueList.find(item=>item.BOOK_PK==this.model.selectedAddItem.BOOK_PK).QUANTITY)+Number(this.model.selectedAddItem.QUANTITY);
    }else{
      this.model.bookQueueList.push(this.model.selectedAddItem);
    }
   
    this.model.selectedAddItem=new Book();
    this.calculateTransaction();
  }

  queueBookQuantity(book:Book){
    this.model.bookList.find(item=>item.BOOK_PK==book.BOOK_PK).QUANTITY=this.model.backUpBookList.find(item=>item.BOOK_PK==book.BOOK_PK).QUANTITY-book.QUANTITY
    this.calculateTransaction()
  }

  calculateTransaction(){
    this.model.totalWithoutCommission=this.model.bookQueueList.map(item=>item.PRICE*item.QUANTITY).reduce((acc,value)=>acc+=value,0)
    this.model.totalCommission=this.model.totalWithoutCommission*(this.model.commission/100);
    this.model.totalWithCommission=this.model.totalWithoutCommission-this.model.totalCommission
    this.model.returnTk=this.model.cash-this.model.totalWithCommission
  }

  removeFromBookQueueList(book:Book){
    let tempObj=this.model.bookQueueList.splice(this.model.bookQueueList.findIndex(item=>item.BOOK_PK==book.BOOK_PK),1)
    console.log(tempObj)
    this.model.bookList.find(item=>item.BOOK_PK==book.BOOK_PK).QUANTITY=this.model.backUpBookList.find(item=>item.BOOK_PK==book.BOOK_PK).QUANTITY;
    this.calculateTransaction();
  }

  onClickClearBtn(){
    this.model.bookQueueList=[];
    this.model.selectedCustomer=new Customer()
    this.model.selectedAddItem=new Book()
    this.model.bookList=JSON.parse(JSON.stringify(this.model.backUpBookList))
    this.calculateTransaction()
  }

  onClickTransactionBtn(){
    console.log(this.model.bookQueueList)
    console.log(this.model.selectedCustomer)
    this.model.transaction({products:this.model.bookQueueList,customer:this.model.selectedCustomer,commission:this.model.commission})
    .subscribe(result=>{
      console.log(result)
      this.loadBookList();
    })
  }

}
