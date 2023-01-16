import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeReceiptsAppComponent } from './pancake-receipts-app.component';

describe('PancakeReceiptsAppComponent', () => {
  let component: PancakeReceiptsAppComponent;
  let fixture: ComponentFixture<PancakeReceiptsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PancakeReceiptsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancakeReceiptsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
