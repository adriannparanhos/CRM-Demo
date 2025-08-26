import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private userState = new BehaviorSubject<SocialUser | null>(null);
  public user$ = this.userState.asObservable();

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    this.socialAuthService.authState.subscribe(user => {
      this.userState.next(user);

      if (user) {
        const idToken = user.idToken;
        console.log("Recebido ID token do google", idToken);
        this.router.navigate(['/homepage']);
      }
    })
  }

  public get currentUser(): SocialUser | null {
    return this.userState.getValue();
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut().then(() => {
      this.userState.next(null);
      this.router.navigate(['/login']);
    })
  }
}
