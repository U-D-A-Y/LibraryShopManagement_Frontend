import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DashBoard{
    baseUrl="http://localhost:3000/api/"
    
    constructor(private http: HttpClient) { }
    getTotalCategoriesNumber():Observable<any>{
        return this.http.get(`${this.baseUrl}/categoriesCount`)
    }

    
}