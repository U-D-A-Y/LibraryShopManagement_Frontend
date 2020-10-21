import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class Http{
    baseUrl="api"
    constructor(private http:HttpClient){

    }
    getData(url:string):Observable<any[]>{
        return this.http.get<any>(`${this.baseUrl}/${url}`)}

    postData(url:string,data):Observable<any>{
        return this.http.post<any>(`${this.baseUrl}/${url}`,data)
    }
    deleteData(url:string):Observable<any[]>{
        return this.http.delete<any>(`${this.baseUrl}/${url}`)
    }

    updateData(url:string,data:any){
        return this.http.patch(`${this.baseUrl}/${url}`,data)
    }
}