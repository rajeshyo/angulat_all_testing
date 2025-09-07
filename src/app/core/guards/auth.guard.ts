// src/app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('token'); // simple check
  // const isLoggedIn = false; // 🔑 replace with real auth check

  if (!isLoggedIn) {
    router.navigate(['/login']); // redirect if not logged in
    return false;
  }
  return true;
};

