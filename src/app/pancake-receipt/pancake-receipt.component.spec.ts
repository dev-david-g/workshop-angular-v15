import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeReceiptComponent } from './pancake-receipt.component';

describe('PancakeReceiptComponent', () => {
  let component: PancakeReceiptComponent;
  let fixture: ComponentFixture<PancakeReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PancakeReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancakeReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
