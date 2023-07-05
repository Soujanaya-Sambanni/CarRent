import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormBuilder} from '@angular/forms';
import { datamodel } from './datamodel';
import { CapiService } from 'src/app/capi.service';



@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrls: ['./get-car.component.css']
})
export class GetCarComponent implements OnInit {
  carform!: FormGroup;
  searchText: any;
  cardata: undefined | datamodel[];
  constructor(private formbuilder: FormBuilder, private api:CapiService) { }
  ngOnInit(): void {
    this.carform = this.formbuilder.group({
      id:['', Validators.required],
      model: ['', Validators.required],
      cname: ['', Validators.required],
      year: ['', Validators.required],
      url: ['', Validators.required],
      
  })
  this.getcar();
  
}
add(car: datamodel) {
  console.log(car)
  this.api.addcar(car).subscribe((res => {
    this.carform.reset();
    this.getcar();
  }
  ))

}
getcar() {
  this.api.getcar().subscribe((res => {
    this.cardata = res;
  }))
}



}
