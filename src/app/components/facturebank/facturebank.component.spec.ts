import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturebankComponent } from './facturebank.component';

describe('FacturebankComponent', () => {
  let component: FacturebankComponent;
  let fixture: ComponentFixture<FacturebankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturebankComponent]
    });
    fixture = TestBed.createComponent(FacturebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
