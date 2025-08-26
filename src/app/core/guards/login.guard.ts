import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthLoginService } from '../../auth/login/auth-login.service';
import { map, take } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const authLoginService = inject(AuthLoginService);
  const router = inject(Router);

  return authLoginService.user$.pipe(
    take(1),
    map(user => {
      if (user) {
        console.log('LoginGuard: Usuário já logado. Redirecionando para /home...');
        router.navigate(['/homepage']);
        return false;
      }
      return true;
    })
  )
};
