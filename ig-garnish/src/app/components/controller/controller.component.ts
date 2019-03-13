import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  @Input()
  quote:string;
  @Input()
  author:string;
  quoteText:string;
  quoteAuthor:string;
  constructor() { }

  ngOnInit() {
    console.log(this.quote)
    // this.quoteText = this.quote;
  }

}
