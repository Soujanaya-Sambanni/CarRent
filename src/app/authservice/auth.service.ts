import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  login({ email, password }: any): Observable<any> {
    return new Observable((observer) => {
      if (email === 'admin@gmail.com' && password === 'admin123') {
        this.setToken('abcdefghijklmnopqrstuvwxyz');
        observer.next({ name: 'Kartik', email: 'admin@gmail.com' });
        observer.complete();
      } else {
        observer.error('Failed to login');
      }
    });
  }
}
