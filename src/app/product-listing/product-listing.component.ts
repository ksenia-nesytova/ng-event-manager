import { Component } from '@angular/core';
import { Product } from '../interfaces/Product'
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})

export class ProductListingComponent {
   products: Product[] = [
     {
    id: 632910392,
    title: "Smarthphone - 32GB",
    description: "A thing for making phone calls",
    vendor: "Eggplant",
  }, {
    id: 1,
    title: "A Kidney",
    description: "It's an internal organ",
    vendor: "BlackMarketInc",
  },
  {
    id: 2,
    title: "The Odyssey by Homer, Paperback",
    description: "What happened to your dad when he left to get some milk",
    vendor: "SaveTheTrees",
  }];
}
