import { Injectable, signal } from '@angular/core';
import { Prds } from '../interfaces/prds.interfaces';
import { SingletonService } from './singleton.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = signal<Prds[]>([]);
  loading = signal<boolean>(false);
  constructor(private singleton: SingletonService){};
  loadProducts(): void{
    this.loading.set(true);
    this.singleton.fetchData<Prds[]>('https://fakestoreapi.com/products').pipe(
      finalize(() => {
        setTimeout(() => {this.loading.set(false)}, 1000)
      })
    ).subscribe({
      next: data => {
        this.products.set(data);
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
