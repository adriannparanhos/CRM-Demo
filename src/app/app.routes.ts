import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { PropostaPageComponent } from './pages/proposta/proposta-page/proposta-page.component';
import { ClientePageComponent } from './pages/cliente/cliente-page/cliente-page.component';
import { loginGuard } from './core/guards/login.guard';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProdutoPageComponent } from './pages/produto/produto-page/produto-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [loginGuard] },
  { path: '', component: MainLayoutComponent,canActivate: [authGuard], 
    children: [
      { path: 'homepage', component: HomePageComponent },
      { path: 'propostas', component: PropostaPageComponent },
      { path: 'clientes', component: ClientePageComponent },
      { path: 'produtos', component: ProdutoPageComponent },

      { path: '', redirectTo: 'homepage', pathMatch: 'full' } 
    ]
  },
  { path: '**', redirectTo: 'login' }
];