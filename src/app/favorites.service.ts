import { Injectable } from '@angular/core';
import { Product } from './interfaces/Product';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  items:Product[] = [];

  constructor() {}

    addToFavorites(product:Product): void {
      console.log(this.items, 'SERVICE')
     const index = this.items.findIndex(item => item.id === product.id);
     if(index > -1 ) {
       this.items.splice(index, 1);
     } else {
        this.items.push(product);
       }
       console.log(this.items)
     }

     getItems(): Product[] {
       console.log('getting items')
       return this.items;
     }

     clearFavorites(): Product[] {
       this.items = [];
       return this.items;
     }

     removeFromFavorites(product:Product): void {
       const index = this.items.indexOf(product);
       if (index > -1) {
         this.items.splice(index, 1);
       }
     }

     getTotalItems(): number {
      return this.items.reduce((total, item) => total + item.quantity!, 0);
  }
}
