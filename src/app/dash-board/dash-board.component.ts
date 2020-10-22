import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashBoard } from './dashboard.model';
import { Router } from '@angular/router';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
})
export class DashBoardComponent implements OnInit {

  constructor(
    public model:DashBoard,
 
    private router:Router) {
    
   }

  ngOnInit(): void {

    
  }

  onClickViewDetailBtn(data){
    console.log(data)
    this.router.navigate([data.path])
  }

}
