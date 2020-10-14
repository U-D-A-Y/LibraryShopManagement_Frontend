import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {
  routerUrl:string
  constructor(private router:Router,private authService:AuthService) {
    router.events.subscribe(e=>{
      this.routerUrl=router.url;
     })
   }

  ngOnInit(): void {
  }

  onClickSignOutBtn(){
    this.authService.removeToken();
    this.router.navigate([''])
  }

}
