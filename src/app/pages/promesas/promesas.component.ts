import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('exito', mensaje)
    )
      .catch(error => {
        console.error('error en la promesa', error);
      });
  }

  ngOnInit() {
  }

  contarTres() {
    let promesa = new Promise((resolve, reject) => {

      let cont = 0;

      let intervalo = setInterval(() => {
        cont += 1;
        if (cont === 3) {
          resolve('OK!');
          clearInterval(intervalo);
        }
      }, 1000);
    });
    return promesa;
  }

}
