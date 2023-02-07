import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QuestionsComponent} from "./questions/questions.component";
import {ProductComponent} from "./product/product.component";
import {ProductAdderComponent} from "./product-adder/product-adder.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/questions-form', pathMatch: 'full'},
  {path: 'questions-form', component: QuestionsComponent},
  {path: 'product/suggestions', component: ProductComponent},
  {path: 'product/create', component: ProductAdderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
