import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondatComponent } from './mondat.component';

describe('MondatComponent', () => {
  let component: MondatComponent;
  let fixture: ComponentFixture<MondatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MondatComponent]
    });
    fixture = TestBed.createComponent(MondatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
