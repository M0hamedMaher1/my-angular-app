import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  constructor(private http: HttpClient){};
  fetchData<T>(link: string): Observable<T>{
    return this.http.get<T>(link);
  };
  login<T>(link: string, data: Users): Observable<T>{
    return this.http.post<T>(link, data);
  };
  handleError(errResponse: HttpErrorResponse): Observable<any>{
    if(errResponse.status === 0){
      console.error('client side error occurred: ', errResponse.status, errResponse.error)
    }
    else{
      console.error('back-end side error occurred: ', errResponse.status, errResponse.error)
    }
    return throwError(() => new Error('Unexpected Error!'));
  };
}
