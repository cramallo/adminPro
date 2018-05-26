import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input()leyenda:string="";
  @Input()progress:number=50;
  @Output()cambioValor:EventEmitter<number>=new EventEmitter();  

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(val:number){
    //this.progress+=val;
    this.cambioValor.emit(this.progress);
  }

  onChange(newNumber:number){
    this.cambiarValor(this.progress);
  }

}
