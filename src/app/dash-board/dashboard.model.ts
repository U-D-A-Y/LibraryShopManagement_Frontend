import { Injectable } from '@angular/core';
import { Http } from '../http.service';

@Injectable({
    providedIn: 'root',
})
export class DashBoard{

    
    constructor(private http: Http) { }
 

    getTotalCategories(){
        return this.http.getData('categories/count')
    }

    
}