import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  progress:number=50;  

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(val:number){
    this.progress+=val;
  }

}
