import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService){};
  closeCart(): void{
    this.cartService.closeCart();
  };
  removeElement(index: number): void{
    this.cartService.removeElement(index);
  };
  clearCart(): void{
    this.cartService.clearCart();
  };
}
