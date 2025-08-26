import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthLoginService } from '../../auth/login/auth-login.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthLoginService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => {
      if (user) {
        // Se EXISTE um usuário logado, permite o acesso
        return true;
      }
      
      // Se NÃO existe um usuário, redireciona para o login e bloqueia
      router.navigate(['/login']);
      return false;
    })
  );
};