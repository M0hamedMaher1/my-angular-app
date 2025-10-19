import { Injectable, signal } from '@angular/core';
import { Prds } from '../interfaces/prds.interfaces';
import { SingletonService } from './singleton.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoreDetailsService {
  product!: Prds;
  loading = signal<boolean>(false);
  constructor(private singleton: SingletonService){};
  loadProduct(id: number): void{
    this.loading.set(true);
    this.singleton.fetchData<Prds>(`https://fakestoreapi.com/products/${id}`).pipe(
      finalize(() => {
        setTimeout(() => {this.loading.set(false)}, 1000);
      })
    ).subscribe({
      next: data => {
        this.product = data;
      },
      error: error => {
        console.error(error);
      }
    });
  };
}
