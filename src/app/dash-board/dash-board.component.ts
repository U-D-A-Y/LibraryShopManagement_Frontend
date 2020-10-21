import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashBoard } from './dashboard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(public model:DashBoard,private router:Router) {
    
   }

  ngOnInit(): void {

    
  }

  onClickViewDetailBtn(data){
    console.log(data)
    this.router.navigate([data.path])
  }

}
