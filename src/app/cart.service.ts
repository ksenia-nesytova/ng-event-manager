import { Injectable } from '@angular/core';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Product[] = [];

  constructor() {}

    addToCart(product:Product) {
     const index = this.items.findIndex(item => item.id === product.id);
     if(index > -1 ) {
       this.items[index].quantity!++;
     } else {
       const productInCart: Product = {
          ...product,
          quantity: 1,
        };
        this.items.push(productInCart);
       }
     }

     getItems() {
       return this.items;
     }

     clearCart() {
       this.items = [];
       return this.items;
     }

     removeFromCart(product:Product) {
       const index = this.items.indexOf(product);
       if (index > -1) {
         this.items.splice(index, 1);
       }
     }

     getTotalItems(): number {
      return this.items.reduce((total, item) => total + item.quantity!, 0);
  }
}
