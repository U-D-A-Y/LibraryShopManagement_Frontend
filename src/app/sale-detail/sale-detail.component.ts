import { Component, OnInit } from '@angular/core';
import { Model } from './model.servcie';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
})
export class SaleDetailComponent implements OnInit {
  searchText;
  constructor( public model:Model
  ) { }

  ngOnInit(): void {
    this.model.getSaleDetails()
  }



 
 

}
