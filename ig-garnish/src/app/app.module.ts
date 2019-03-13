import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { MainComponent } from './components/main/main.component';
import { QuoteService } from './services/quote.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [QuoteService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
