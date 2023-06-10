import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product!:Product;
  @Input() isCart:boolean = false;

  constructor(private cartService: CartService) { }

  addToCart(product:Product):void {
    this.cartService.addToCart(product);
  }
  removeFromCart(product:Product):void {
    this.cartService.removeFromCart(product);
  }
  getItemQuantity(product:Product) {
    this.cartService.getItemQuantity(product);
  }

}
