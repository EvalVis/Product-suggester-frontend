import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductSuggesterComponent} from "./product-suggester/product-suggester.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/product-suggester', pathMatch: 'full'},
  {path: 'product-suggester', component: ProductSuggesterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
