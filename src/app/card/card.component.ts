import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LangService } from '../lang.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input('data') data
  @Output('child-click') event=new EventEmitter<any>()
  constructor(
    public langService:LangService
  ) { }

  ngOnInit(): void {
  }


  onClick(){
    this.event.emit(this.data)
  }

}
