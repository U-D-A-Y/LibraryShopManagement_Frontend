import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-auto-complete-input',
  templateUrl: './auto-complete-input.component.html',
  styleUrls: ['./auto-complete-input.component.css']
})
export class AutoCompleteInputComponent implements OnInit {

  @Input('data') inputData
  @Input('selectedData') selectedData
  @Input('field') field
  @Output('choose') chooseList=new EventEmitter()
  show=false
  dataList:Array<Book>
  
  constructor() { 
   
  }

  ngOnInit(): void {
    this.dataList=JSON.parse(JSON.stringify(this.inputData))
    console.log(this.dataList)
  }


  onFocus(){
    this.show=true
    this.dataList=JSON.parse(JSON.stringify(this.inputData))
  }
  onClickList(data){
    this.show=false
    this.selectedData=data;
    this.chooseList.emit(this.selectedData)
  }

}
