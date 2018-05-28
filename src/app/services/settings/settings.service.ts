import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }
  //Este se llama cada vez que se inyecta en un componente en el constructor
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }
  //Obtener ajustes del localstorage si hay 
  cargarAjustes() {
    //Si hay ajustes cargados
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      //Obtiene el tema por default o el que se aplico anteriormente
      this.aplicarTema(this.ajustes.tema);
    } else {
      //Obtiene el default
      console.log("Usando valores por defecto");
      this.aplicarTema(this.ajustes.tema);
    }
  }
  //Mostrarlo en pantalla
  aplicarTema(tema: string) {    
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjusters();
  }
  //Guardar en localStorage
  guardarAjusters() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
}

interface Ajustes {
  temaUrl: string,
  tema: string,
}
