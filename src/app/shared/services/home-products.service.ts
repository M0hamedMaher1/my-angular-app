import { Injectable, signal } from '@angular/core';
import { Prds } from '../interfaces/prds.interfaces';
import { SingletonService } from './singleton.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {
  products = signal<Prds[]>([]);
  loading = signal<boolean>(false);
  constructor(private singleTon: SingletonService){};
  loadProducts(): void{
    this.loading.set(true);
    this.singleTon.fetchData<Prds[]>('https://fakestoreapi.com/products').pipe(
      finalize(() => {
        setTimeout(() => {this.loading.set(false)}, 800);
      })
    ).subscribe({
      next: data => {
        this.products.set(data.slice(0,6));
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
