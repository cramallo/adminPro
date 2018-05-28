import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ss:SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string,link:any){
    this.aplicarCheck(link);
    this._ss.aplicarTema(tema);   
  }

  aplicarCheck(link:any){
    let selectores=document.getElementsByClassName('selector');    
    //a los seleccionados actualmente les saco el marcador
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    //al seleccionado hago que quede marcado
    link.classList.add('working');
  }

  //Veo de todos los selectores cual es el seleccionado, cuando recargo
  colocarCheck(){
    let selectores=document.getElementsByClassName('selector');
    let tema=this._ss.ajustes.tema;    
    for(let sel of selectores){
      if(sel.getAttribute('data-theme')===tema){
        //al seleccionado hago que quede marcado
        sel.classList.add('working');
        break;
      }
    }

  }

}
