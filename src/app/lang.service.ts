import { Injectable } from '@angular/core';
import json from './lang.json';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language=[
    {value:"en",text:"English"},
    {value:"bn",text:"Bangla"},
    {value:"jp",text:"Japanese"},
  ]
  data:any={}
  constructor() {
    this.changeLanguage('en')
   }

  generateMap(lang){
    this.data={}
    Object.keys(json).forEach(item=>{
      this.data[item]=json[item][lang]
    })
  }

  changeLanguage(lang){
    this.generateMap(lang);
  }
}
