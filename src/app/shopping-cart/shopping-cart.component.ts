import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../interfaces/Product'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor(public cartService: CartService) { }

  isCart: boolean = true;
  items:Product[] = [];

  ngOnInit() {
   this.items = this.cartService.getItems();
 }

}
