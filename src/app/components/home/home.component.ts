import { Component } from '@angular/core';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeProducts2Component } from './home-products2/home-products2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeProductsComponent, HomeProducts2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
