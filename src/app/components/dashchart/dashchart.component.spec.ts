import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashchartComponent } from './dashchart.component';

describe('DashchartComponent', () => {
  let component: DashchartComponent;
  let fixture: ComponentFixture<DashchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashchartComponent]
    });
    fixture = TestBed.createComponent(DashchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
