import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input('data') data
  @Output('child-click') event=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }


  onClick(){
    this.event.emit(this.data)
  }

}
