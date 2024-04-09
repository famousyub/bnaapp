import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfacturebankComponent } from './myfacturebank.component';

describe('MyfacturebankComponent', () => {
  let component: MyfacturebankComponent;
  let fixture: ComponentFixture<MyfacturebankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfacturebankComponent]
    });
    fixture = TestBed.createComponent(MyfacturebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
