import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { loginGuard } from './core/guards/login.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginPageComponent, canActivate: [loginGuard] },
    { path: 'homepage', component: HomePageComponent },
    { path: '**', redirectTo: 'login' }
];
