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
    (this.content as any).cook()
      .then((response: any)=> {
      console.log(response);
    })
  }

}
