import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfacturedetailsComponent } from './myfacturedetails.component';

describe('MyfacturedetailsComponent', () => {
  let component: MyfacturedetailsComponent;
  let fixture: ComponentFixture<MyfacturedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfacturedetailsComponent]
    });
    fixture = TestBed.createComponent(MyfacturedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
