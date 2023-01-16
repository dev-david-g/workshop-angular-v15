import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeReceiptListComponent } from './pancake-receipt-list.component';

describe('PancakeReceiptListComponent', () => {
  let component: PancakeReceiptListComponent;
  let fixture: ComponentFixture<PancakeReceiptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PancakeReceiptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancakeReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
