import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 //injection modules

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import compenents
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
