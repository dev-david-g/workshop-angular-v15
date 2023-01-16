import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeReceiptDetailsComponent } from './pancake-receipt-details.component';

describe('PancakeReceiptDetailsComponent', () => {
  let component: PancakeReceiptDetailsComponent;
  let fixture: ComponentFixture<PancakeReceiptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PancakeReceiptDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancakeReceiptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
