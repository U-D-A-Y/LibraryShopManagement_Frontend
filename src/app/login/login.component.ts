import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  baseUrl="http://localhost:3000/"
  constructor(private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(loginForm:NgForm){
    this.http.post(`${this.baseUrl}login`,{data:loginForm.value})
    .subscribe(result=>{
      if(result[0]){
        console.log(result[0])
        this.router.navigate(['dashboard'])

      }
    })
  }

}
