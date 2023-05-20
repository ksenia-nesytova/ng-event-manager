import { Injectable } from '@angular/core';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Product[] = [];

  constructor() {}

    addToCart(product:Product) {
       this.items.push(product);
       console.log(this.items)
     }

     getItems() {
       return this.items;
     }

     clearCart() {
       this.items = [];
       return this.items;
     }

     removeItem(product:Product) {
       const index = this.items.indexOf(product);
       if (index > -1) {
         this.items.splice(index, 1);
   }
 }
}
