import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeProductsService } from '../../../shared/services/home-products.service';
import { Prds } from '../../../shared/interfaces/prds.interfaces';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent implements OnInit {
  constructor(public products: HomeProductsService, private router: Router, private cartService: CartService){};
  ngOnInit(): void {
    this.products.loadProducts();
  };
  trackFn(item: Prds): number{
    return item.id;
  };
  moreDetails(item: Prds): void{
    this.router.navigate([`/details/${item.id}`], {queryParams: {id: item.id, title: item.title}});
  };
  addToCart(item: Prds): void{
    this.cartService.addToCart(item);
  };
}
