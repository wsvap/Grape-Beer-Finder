import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from "./error/error.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorComponent},
  {
    path: 'products', component: ProductListComponent,
    children: [
      {path: ':productId', component: ProductDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
