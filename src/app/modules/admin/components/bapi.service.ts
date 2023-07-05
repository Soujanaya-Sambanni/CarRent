import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bdatamodel } from './booknow/bdatamodel';

@Injectable({
  providedIn: 'root'
})
export class BapiService {

  url ="http://localhost:3000/booking/";
  constructor(private http:HttpClient){ }

  add(data:bdatamodel){
    return this.http.post<bdatamodel>("http://localhost:3000/booking",data)
  }
  getbook(){
    return this.http.get<bdatamodel[]>("http://localhost:3000/booking");
  }
  deletebooky(id:number){
    return this.http.delete<bdatamodel>("http://localhost:3000/booking/"+id);
  }
  fetchbook(id:number){
    return this.http.get<bdatamodel>("http://localhost:3000/booking/"+id);
  }
  
}
