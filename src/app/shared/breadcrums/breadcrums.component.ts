import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'Rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {

  titulo: string;

  constructor(private _router: Router, private _title: Title, private _meta: Meta) {
    this.getData().subscribe(rta => {
      this.titulo = rta.titulo;
      this._title.setTitle(this.titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this._meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getData() {
    return this._router.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((evento: ActivationEnd) => evento.snapshot.data)
      );
  }

}
