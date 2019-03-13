import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  tags:Array<string>;

  constructor() { }

  ngOnInit() {
    this.tags = ['Love','Passion','Inspiring','Movie','Fun','Sassy','Sporty',]
  }

}
