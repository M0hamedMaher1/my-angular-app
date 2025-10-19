import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingSpinnerService } from "../services/loading-spinner.service";
import { SingletonService } from "../services/singleton.service";
import { catchError, delay, finalize, Observable, retryWhen, tap } from "rxjs";

@Injectable()

export class MyInterceptor implements HttpInterceptor{
    constructor(private loadingSpinner: LoadingSpinnerService, private singleton: SingletonService){};
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingSpinner.show();
        return  next.handle(req).pipe(
            retryWhen((errors) => errors.pipe(
                tap(() => console.warn('no internet connection, retrying...')),
                delay(3000)
            )),
            catchError(this.singleton.handleError),
            finalize(() => {
                setTimeout(() => {this.loadingSpinner.hide()}, 500)
            })
        )
    }
}