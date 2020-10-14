import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(){
    return localStorage.getItem('Token')
  }
  setToken(token){
    localStorage.setItem('Token',token)
  }

  removeToken(){
    localStorage.removeItem('Token')
  }

  isAuthenticated(){
    return this.getToken() ? true :false;
  }
}
