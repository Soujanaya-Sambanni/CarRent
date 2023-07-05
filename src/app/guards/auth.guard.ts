import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice/auth.service';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router: Router = new Router(); // Instantiate Router

  const auth: AuthService = new AuthService(router); // Provide Router instance to AuthService constructor

  if (!auth.isLoggedIn()) {
    // if not logged in
    router.navigate(['/login']);
    return false;
  }
  return true;
}
  

