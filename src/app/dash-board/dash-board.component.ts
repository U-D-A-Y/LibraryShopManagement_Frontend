import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashBoard } from './dashboard.model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
 
  constructor(public model:DashBoard) {
    
   }

  ngOnInit(): void {

    
  }

}
