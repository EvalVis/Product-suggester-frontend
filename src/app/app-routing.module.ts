import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {QuestionsFormComponent} from "./questions/questions-form/questions-form.component";
import {CreateProductFormComponent} from "./forms/create-product-form/create-product-form.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/questions-form', pathMatch: 'full'},
  {path: 'questions-form', component: QuestionsFormComponent},
  {path: 'product/suggestions', component: ProductComponent},
  {path: 'product/create', component: CreateProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
