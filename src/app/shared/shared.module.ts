import { NgModule } from "@angular/core";
import { CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from '../shared/header/header.component';
import { ErrorComponent } from '../shared/error/error.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from '../shared/breadcrums/breadcrums.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        ErrorComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        ErrorComponent
    ],
    providers: []
})
export class SharedModule { }