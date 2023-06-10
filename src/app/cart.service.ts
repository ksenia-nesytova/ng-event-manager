import { Injectable } from '@angular/core';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Product[] = [];

  constructor() {}

    addToCart(product:Product): void {
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

     getItems(): Product[] {
       return this.items;
     }

     getItemQuantity(product:Product): number|undefined {
       const index = this.items.findIndex(item => item.id === product.id);
       if(index > -1 ) {
         return this.items[index].quantity;
       } else {
        console.log('No such item in cart')
         return;
       }
     }

     clearCart(): Product[] {
       this.items = [];
       return this.items;
     }

     removeFromCart(product:Product): void {
       const index = this.items.indexOf(product);
       if (index > -1) {
         this.items.splice(index, 1);
       }
     }

     getTotalItems(): number {
      return this.items.reduce((total, item) => total + item.quantity!, 0);
  }
}
