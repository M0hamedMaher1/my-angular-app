import { NgClass } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck{
  text: string = 'login';
  constructor(private getToken: TokenService, public cartService: CartService){};
  ngDoCheck(): void {
    if(this.getToken.getToken()){
      this.text = 'logout'
    }else{
      this.text = 'login'
    }
  }
  logout(): void{
    this.getToken.logout();
  };
  openCart(): void{
    this.cartService.openCart();
  };
  aside: number = 0;
  openAside(): void{
    this.aside = 1;
  };
  closeAside(): void{
    this.aside = 0;
  };
}
