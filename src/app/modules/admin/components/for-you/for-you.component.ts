import { Component, OnInit } from '@angular/core';
import { dataModel } from './dataModel';
import { ListapiService } from '../listapi.service';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css']
})
export class ForYouComponent  implements OnInit{

  data!: dataModel[];

  constructor(private api: ListapiService ) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist() {
    this.api.getlist().subscribe(res => {
      this.data = res;
    })
  }
  cards = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' }
  ];
}
