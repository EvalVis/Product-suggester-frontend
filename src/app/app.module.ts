import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsFormComponent } from './questions/questions-form/questions-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProgressChainComponent } from './shared/progress-chain/progress-chain.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsFormComponent,
    ProgressChainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
