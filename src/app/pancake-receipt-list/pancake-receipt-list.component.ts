import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PancakeReceiptComponent} from '../pancake-receipt/pancake-receipt.component';

@Component({
  selector: 'app-pancake-receipt-list',
  standalone: true,
  imports: [CommonModule, PancakeReceiptComponent],
  templateUrl: './pancake-receipt-list.component.html',
  styleUrls: ['./pancake-receipt-list.component.css']
})
export class PancakeReceiptListComponent {

}
