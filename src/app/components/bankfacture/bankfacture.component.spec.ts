import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankfactureComponent } from './bankfacture.component';

describe('BankfactureComponent', () => {
  let component: BankfactureComponent;
  let fixture: ComponentFixture<BankfactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankfactureComponent]
    });
    fixture = TestBed.createComponent(BankfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
