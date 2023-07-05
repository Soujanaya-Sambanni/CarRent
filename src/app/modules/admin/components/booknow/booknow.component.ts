import { Component, OnInit } from '@angular/core';
import { bdatamodel } from './bdatamodel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BapiService } from '../bapi.service';
import { datamodel } from '../get-car/datamodel';
import { CapiService } from 'src/app/capi.service';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {
  bookform!: FormGroup;
  cardata!:datamodel[];
  searchText: any;
  data: undefined | bdatamodel[];
  constructor(private formbuilder: FormBuilder, private api:CapiService, private bapi:BapiService) { }
  ngOnInit(): void {
    this.bookform = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      number: ['', Validators.required],
      carname:['', Validators.required],
      date: ['', Validators.required],
      lname: ['', Validators.required],
      ptime: ['', Validators.required],
      rtime: ['', Validators.required],
      
    })
    this.getbook();
    this.getcarname();
  }
  add(data:bdatamodel) {
    console.log(data)
    this.bapi.add(data).subscribe((res => {
     
      this.bookform.reset();
      alert('Successfully Booked');
      
    }
    ))
    this.getbook();
  }
  getbook() {
    this.bapi.getbook().subscribe((res => {
      this.data = res;
    }))
  }
  deletebook(dataid: number) {
    this.bapi.deletebooky(dataid).subscribe((res => {
      this.deletebook(dataid);
    }))
    this.getbook();
  }
  getcarname(){
    this.api.getcarname().subscribe(res=>{
      this.cardata=res;
    })
  }
}
