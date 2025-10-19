import { Injectable } from '@angular/core';
import { SingletonService } from './singleton.service';
import { TokenService } from './token.service';
import { Users } from '../interfaces/users.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// https://jsonplaceholder.typicode.com/users
  constructor(private singleTon: SingletonService, private token: TokenService){};
  login(data: Users): Observable<Users>{
    return this.singleTon.login<Users>('https://jsonplaceholder.typicode.com/users', data).pipe(
      tap((data2: any) => {
        this.token.saveToken(data2)
      })
    )
  };
  logout(): void{
    this.token.logout();
  };
  isLoggedIn(): boolean{
    return !!this.token.getToken();
  }
}
