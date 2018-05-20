import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ErrorComponent } from './shared/error/error.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: ErrorComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });