import { Component } from '@angular/core';
import { AuthLoginService } from '../../../auth/login/auth-login.service';
import { CommonModule } from '@angular/common';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login'; 


@Component({
  selector: 'app-login-button',
  imports: [CommonModule, GoogleSigninButtonModule],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  constructor(public authService: AuthLoginService) {}

  signOut(): void {
    this.authService.signOut();
  }
}
