import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        //titulo y adonde direcciona
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Graficos', url: '/graficas1' },
        { titulo: 'promesas', url: '/promesas' },
        { titulo: 'rxjs', url: '/rxjs' }
      ]
    }
  ];

  constructor() { }

}
