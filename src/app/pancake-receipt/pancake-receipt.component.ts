import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";

@Component({
  selector: 'app-pancake-receipt',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pancake-receipt.component.html',
  styleUrls: ['./pancake-receipt.component.css']
})
export class PancakeReceiptComponent {
}
