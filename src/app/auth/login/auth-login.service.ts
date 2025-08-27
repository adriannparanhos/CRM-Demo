import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private userState = new BehaviorSubject<User | null>(null);
  public user$ = this.userState.asObservable();

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userState.next(JSON.parse(savedUser));
    }

    this.socialAuthService.authState.subscribe((googleUser: SocialUser | null) => {
      if (googleUser) {
        const user: User = {
          id: googleUser.id,
          name: googleUser.name,
          email: googleUser.email,
          photoUrl: googleUser.photoUrl,
          idToken: googleUser.idToken
        };

        this.userState.next(user);
        localStorage.setItem('user', JSON.stringify(user));

        console.log("✅ Logado com Google, token:", user.idToken);
        this.router.navigate(['/homepage']);
      }
    });
  }

  public get currentUser(): User | null {
    return this.userState.getValue();
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut().then(() => {
      this.userState.next(null);

      localStorage.removeItem('user');

      this.router.navigate(['/login']);
    });
  }
}
