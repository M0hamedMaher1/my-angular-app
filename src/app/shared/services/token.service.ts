import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token = 'token';
  saveToken(token: string): void{
    localStorage.setItem(this.token, token);
  };
  logout(): void{
    localStorage.removeItem(this.token);
  };
  getToken(): string | null{
    return localStorage.getItem(this.token);
  };
}
