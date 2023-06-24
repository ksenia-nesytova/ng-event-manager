import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { FavoritesService } from '../favorites.service'

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})

export class FavoritesPageComponent {
  constructor(public favsService: FavoritesService) { }

  isCart: boolean = false;
  items:Product[] = [];

  ngOnInit() {
   this.items = this.favsService.getItems();
   console.log(this.items)
 }
}
