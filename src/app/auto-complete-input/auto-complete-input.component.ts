import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-auto-complete-input',
  templateUrl: './auto-complete-input.component.html',
  styleUrls: ['./auto-complete-input.component.css']
})
export class AutoCompleteInputComponent implements OnInit {

  @Input('data') inputData
  @Output('choose') chooseList=new EventEmitter()
  show=false
  inputField=""
  booklist:Array<Book>
  
  constructor() { 
   
  }

  ngOnInit(): void {
    this.booklist=JSON.parse(JSON.stringify(this.inputData))
    console.log(this.booklist)
  }


  onFocus(){
    this.show=true
    this.booklist=JSON.parse(JSON.stringify(this.inputData))
  }
  onClickList(book){
    this.show=false
    this.chooseList.emit(book)
    this.inputField=book.BOOK_NAME
  }

}
