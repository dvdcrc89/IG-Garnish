import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { QuoteService } from './services/quote.services';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatChipsModule,
    MatButtonModule,
    ClipboardModule

  ],
  providers: [QuoteService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
