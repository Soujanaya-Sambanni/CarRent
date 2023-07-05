import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { CapiService } from 'src/app/capi.service';
import { datamodel } from '../get-car/datamodel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
  constructor( private capi:CapiService,private activatedRoute:ActivatedRoute){}

  cardata!:datamodel[];
  datacname!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params)=> {
      this.datacname=param['get']("car");
      this.FilterCategory(this.datacname);
    });
      
  }
  
  FilterCategory(car:string){
    this.capi.fetchdata(car).subscribe((data) => {
      console.log(car);
      console.log(data);
     this.cardata=data;

    })
  }


}
