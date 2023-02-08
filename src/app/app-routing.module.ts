import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {ProductAdderComponent} from "./product-adder/product-adder.component";
import {QuestionsFormComponent} from "./questions/questions-form/questions-form.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/questions-form', pathMatch: 'full'},
  {path: 'questions-form', component: QuestionsFormComponent},
  {path: 'product/suggestions', component: ProductComponent},
  {path: 'product/create', component: ProductAdderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
