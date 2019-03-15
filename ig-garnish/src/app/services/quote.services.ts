import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Quote } from 'src/models/quote.model';
import { environment } from 'src/environments/environment';



@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) {}

  getQuote(payload):Observable<any>{
    let url = environment.url;
    if(payload.tag){
        url = url+"/"+payload.tag
    } else {
      url = url+"/Any"
    }
    return this.http
    .get<Quote>(url)
    .pipe(catchError((error: any) => of(null)));
  }
}