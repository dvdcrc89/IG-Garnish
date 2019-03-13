import { Component, OnInit } from '@angular/core';
import { QuoteService } from './services/quote.services';
import { Observable, of } from 'rxjs';
import { Quote } from 'src/models/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private quoteService : QuoteService ){}
  title = 'app';
  quote: Observable<any>
  author: Observable<any>
  ngOnInit() {
    let payload={
      tag:"Any"
    }
     this.pullQuote(payload);
    
  } 

  pullQuote(tag){
  
    let payload={};
    if(tag && tag !=="Any"){
      payload = {
        tag:tag
      };
    }
 
    console.log("payload",payload);
    this.quoteService.getQuote(payload).subscribe(quote=>{
      let q = quote.results[0].quote.replace(quote.results[0].author,"")
      this.quote = of(q)
      this.author = of(quote.results[0].author)
     }
     )

  }
}
