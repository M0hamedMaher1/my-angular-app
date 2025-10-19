import { computed, Injectable, signal } from '@angular/core';
import { Prds } from '../interfaces/prds.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  signalCart = signal<Prds[]>([]);
  addToCart(item: Prds): void{
    const existingItem = this.signalCart().find(p => p.id === item.id);
    if(existingItem){
      existingItem.quantity = (existingItem.quantity || 1) + 1;
      this.signalCart.update(items => [...items]);
    }else{
      this.signalCart.update(items => [...items, {... item, quantity: 1}])
    }
  };
  totalPrice = computed(() => this.signalCart().reduce((sum, item) => sum + item.price * item.quantity, 0))
  removeElement(index: number): void{
    this.signalCart().splice(index, 1);
  };
  clearCart(): void{
    this.signalCart().splice(0);
  };
  cartStatus: number = 0;
  openCart(): void{
    this.cartStatus = 1;
  };
  closeCart(): void{
    this.cartStatus = 0;
  };
}
