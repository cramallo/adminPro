import { NgModule } from "@angular/core";
import { FormsModule} from '@angular/forms';
import { SharedModule} from '../shared/shared.module';
import {PagesComponent} from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
//RUTAS
import {PAGES_ROUTES} from './pages.routes';

@NgModule({
    declarations: [
      PagesComponent,     
      DashboardComponent,
      ProgressComponent,    
      Graficas1Component,
      IncrementadorComponent     
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,    
        Graficas1Component,    
    ],
    providers: []    
  })
  export class PagesModule { }