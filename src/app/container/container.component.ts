import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {
  routerUrl: string
  constructor(
    private router: Router, 
    private authService: AuthService,
    public langService:LangService) {
    router.events.subscribe(e => {
      this.routerUrl = router.url;
    })
  }
  show=false
  ngOnInit(): void {
  }

  onClickSignOutBtn() {
    this.authService.removeToken();
    this.router.navigate([''])
  }

  onChangeLanguage(lang){
    console.log(lang)
    this.langService.changeLanguage(lang)
  }

}
