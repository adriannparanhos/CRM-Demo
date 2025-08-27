import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthLoginService } from '../../auth/login/auth-login.service';
import { User } from '../../auth/login/models/User';
import { LucideAngularModule } from 'lucide-angular';
import { NavigationItem } from './models/NavigationItem';

@Component({
  selector: 'app-main-layout', 
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    LucideAngularModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  public isSidebarOpen = false;
  
  public user: User | null = null;
  private userSubscription: Subscription | undefined;

  public readonly navigationItems: NavigationItem[] = [
    { path: '/dashboard', name: 'Dashboard', icon: 'layout-dashboard' },
    { path: '/clientes', name: 'Clientes', icon: 'users' },
    { path: '/propostas', name: 'Propostas', icon: 'file-text' },
    { path: '/produtos', name: 'Produtos', icon: 'package' }
  ];

  constructor(private authLoginService: AuthLoginService) {}

  ngOnInit(): void {
    this.userSubscription = this.authLoginService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout(): void {
    this.authLoginService.signOut();
  }
}