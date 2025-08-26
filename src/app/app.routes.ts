import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';

export const routes: Routes = [
    { path: 'login', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginPageComponent },
    { path: '**', redirectTo: 'login' }
];
