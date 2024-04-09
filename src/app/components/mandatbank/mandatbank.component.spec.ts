import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatbankComponent } from './mandatbank.component';

describe('MandatbankComponent', () => {
  let component: MandatbankComponent;
  let fixture: ComponentFixture<MandatbankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandatbankComponent]
    });
    fixture = TestBed.createComponent(MandatbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
