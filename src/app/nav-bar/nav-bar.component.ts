import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public langService:LangService
  ) { }

  ngOnInit(): void {
  }

}
