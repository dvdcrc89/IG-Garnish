import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Quote } from 'src/models/quote.model';
import { environment } from 'src/environments/environment';



@Injectable()
export class QuoteService {
    apiKey:string = environment.apiKey
  constructor(private http: HttpClient) {}

  getQuote(payload):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json').set('Authorization','Token '+ this.apiKey);
    let url = "https://api.paperquotes.com/apiv1/quotes/?limit=1&order=?&maxlength=140";
    if(payload.tag){
        url = url+"&lang=en&tags="+payload.tag
    }
    url = url + "&"+Math.random()
    
    return this.http
    .get<any[]>(url,{headers:headers})
    .pipe(catchError((error: any) => of(null)));
  }
}