import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'Rxjs/Rx';
import { retry, map, filter } from 'Rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() {
    this.subscripcion = this.metodoObservable().pipe(retry(2)).subscribe(rta =>
      console.log(rta),
      error => console.error('error', error),
      () => console.log('EL OBSERVADOR TERMINO')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("No traigo mas datos");
    this.subscripcion.unsubscribe();
  }

  metodoObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador = 1;

      const intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        /* if (contador === 3) {
           clearInterval(intervalo);
           observer.complete();
         }*/
      }, 1000);
    }).pipe(

      map(resp => {
        return resp.valor;
      }),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        }
        return false;
      })
    );


  }

}
