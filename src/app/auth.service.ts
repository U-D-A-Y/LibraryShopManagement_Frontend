import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token;
  constructor() { }

  getToken(){
    return this.token
  }
  setToken(token){
    this.token=token;
    console.log(this.token)
  }
}
