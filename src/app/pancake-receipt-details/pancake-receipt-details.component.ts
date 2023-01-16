import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pancake-receipt-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pancake-receipt-details.component.html',
  styleUrls: ['./pancake-receipt-details.component.css']
})
export default class PancakeReceiptDetailsComponent implements OnInit {
  public id = '';

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(response => {
      this.id = response['id'];
    });
  }
}
