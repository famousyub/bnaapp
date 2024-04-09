import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankmodalComponent } from './bankmodal.component';

describe('BankmodalComponent', () => {
  let component: BankmodalComponent;
  let fixture: ComponentFixture<BankmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankmodalComponent]
    });
    fixture = TestBed.createComponent(BankmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
