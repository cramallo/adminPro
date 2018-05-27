import { Component, OnInit,Input,Output,ViewChild,ElementRef,EventEmitter } from '@angular/core';

@Component({
  selector: 'incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input()leyenda:string="";
  @Input()progress:number=50;
  @Output()cambioValor:EventEmitter<number>=new EventEmitter();
  @ViewChild('txtProgress') txtProgress:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(val:number){
    if(this.progress>=100 && val>0){
      this.progress=100;
      return;
    }
    if(this.progress<=0 && val<0){
      this.progress=0;
      return;
    }
    this.progress=this.progress+val;
    this.txtProgress.nativeElement.focus();
    this.cambioValor.emit(this.progress);
  }

  onChange(newNumber:number){
    //let elemHTML:any=document.getElementsByName('progreso')[0];
    if(newNumber>=100){
      this.progress=100;
    }else if(newNumber<=0){
      this.progress=0;
    }else{
      this.progress=newNumber;
    }
    //elemHTML.value=Number(this.progress);
    this.txtProgress.nativeElement.value=this.progress;
    this.cambioValor.emit(this.progress);
  }

}
