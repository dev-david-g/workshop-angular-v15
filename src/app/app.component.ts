import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: {title: string} = {title: 'pancakes'};

  constructor() {
  }

  public doPancake() {
    alert('cook');
  }
}