import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturemodalComponent } from './facturemodal.component';

describe('FacturemodalComponent', () => {
  let component: FacturemodalComponent;
  let fixture: ComponentFixture<FacturemodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturemodalComponent]
    });
    fixture = TestBed.createComponent(FacturemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
