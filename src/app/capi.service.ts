import { Injectable } from '@angular/core';
import { datamodel } from './modules/admin/components/get-car/datamodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapiService {

  url ="http://localhost:3000/car/";
  constructor(private http:HttpClient){ }
  
  addcar(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/car",data)
  }
  getcar(){
    return this.http.get<datamodel[]>("http://localhost:3000/car");
  }
  deletecar(id:number){
    return this.http.delete<datamodel>("http://localhost:3000/car/"+id);
  }
  fetchcar(id: string) {
    return this.http.get<datamodel>("http://localhost:3000/car/" + id);
  }
  fetchdata(car:string){
    return this.http.get<datamodel[]>("http://localhost:3000/car/"+'? cname='+car);
  }
  getcarname() {
    return this.http.get<datamodel[]>("http://localhost:3000/car");
  }
  
}
