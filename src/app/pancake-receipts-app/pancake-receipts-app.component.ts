import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-pancake-receipts-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './pancake-receipts-app.component.html',
  styleUrls: ['./pancake-receipts-app.component.css']
})
export class PancakeReceiptsAppComponent {

}
