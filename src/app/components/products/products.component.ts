import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Prds } from '../../shared/interfaces/prds.interfaces';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(public products: ProductsService, private router: Router, private cartService: CartService){};
  ngOnInit(): void {
    this.products.loadProducts();
  }
  trackFn(item: Prds): number{
    return item.id;
  }
  moreDetails(item: Prds): void{
    this.router.navigate([`/details/${item.id}`], {queryParams: {id: item.id, title: item.title}});
  };
  addToCart(item: Prds): void{
    this.cartService.addToCart(item);
  };
}
