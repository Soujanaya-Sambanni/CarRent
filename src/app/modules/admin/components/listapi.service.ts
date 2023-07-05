import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataModel } from './for-you/dataModel';

@Injectable({
  providedIn: 'root'
})
export class ListapiService {
  
  url="http://localhost:3000/list";

  constructor(private http:HttpClient) { }
  
 getlist() {
   return this.http.get<dataModel[]>("http://localhost:3000/list");
 }

}
