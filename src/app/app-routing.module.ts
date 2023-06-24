import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';


const routes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'favorites', component: FavoritesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
