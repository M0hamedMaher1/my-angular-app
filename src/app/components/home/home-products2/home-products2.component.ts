import { Component, OnInit } from '@angular/core';
import { Prds } from '../../../shared/interfaces/prds.interfaces';
import { HomeProducts2Service } from '../../../shared/services/home-products2.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-home-products2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-products2.component.html',
  styleUrl: './home-products2.component.css'
})
export class HomeProducts2Component implements OnInit {
  constructor(public products: HomeProducts2Service, private router: Router, private cartService: CartService){};
  ngOnInit(): void {
    this.products.loadProducts()
  }
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
