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
  addedToCart:boolean = false;

  constructor(public cartService: CartService) { }

  addToCart(product:Product):void {
    this.addedToCart = true;
    this.cartService.addToCart(product);
  }
  removeFromCart(product:Product):void {
    this.cartService.removeFromCart(product);
  }

  removeOneFromCart(product:Product) {
    this.cartService.removeOneFromCart(product);
    if(this.getItemQuantity(product) == 0) {
      this.addedToCart = false;
    }
  }

  addToFavorites(product:Product) {
    console.log('added')
  }

  getItemQuantity(product:Product) {
    return this.cartService.getItemQuantity(product);
  }

}
