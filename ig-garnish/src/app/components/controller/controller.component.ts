import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  @Output()
  pullQuote: EventEmitter<string> = new EventEmitter();
  @Input()
  quote:string;
  @Input()
  author:string;
  quoteText:string;
  quoteAuthor:string;
  tags = ['Love','Passion','Inspiring','Movie','Fun','Sassy','Sporty','Any']
  selectedTag:string = "Any";
  constructor() { }

  ngOnInit() {
    console.log(this.quote)
    // this.quoteText = this.quote;
    
  }
  select(tag){
   this.selectedTag=tag;
  }
  generate(){
    this.pullQuote.emit(this.selectedTag);
  }
  copy(inputElement){
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
  }
}
