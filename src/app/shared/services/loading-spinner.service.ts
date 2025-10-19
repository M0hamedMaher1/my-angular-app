import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  private loading = signal<number>(0);
  isLoading = computed(() => this.loading() > 0);
  show(){
    this.loading.update(n => n + 1);
  };
  hide(){
    this.loading.update(n => Math.max(0, n - 1));
  };
}
