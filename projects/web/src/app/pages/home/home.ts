import { Component, Inject, OnInit, Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  // 	Fields
  protected mapKey: string;

  // 	Properties

  // 	Constructors
  constructor(protected title: Title) {}

  // 	Life Cycle
  public ngOnInit() {
    this.mapKey = 'xxx';

    this.title.setTitle("The Pizza Pedal'r - Best Pizza and Happy Hour - Denver & Winterpark");
  }

  // 	API Methods

  // 	Helpers
}
