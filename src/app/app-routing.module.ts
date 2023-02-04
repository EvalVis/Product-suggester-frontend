import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QuestionsFormComponent} from "./questions/questions-form/questions-form.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/questions-form', pathMatch: 'full'},
  {path: 'questions-form', component: QuestionsFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
