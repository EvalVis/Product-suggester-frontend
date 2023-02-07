import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsFormComponent } from './questions/questions-form/questions-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProgressChainComponent } from './shared/progress-chain/progress-chain.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductAdderComponent } from './product-adder/product-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsFormComponent,
    ProgressChainComponent,
    HeaderComponent,
    ProductComponent,
    ProductAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
