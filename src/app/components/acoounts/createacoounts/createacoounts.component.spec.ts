import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateacoountsComponent } from './createacoounts.component';

describe('CreateacoountsComponent', () => {
  let component: CreateacoountsComponent;
  let fixture: ComponentFixture<CreateacoountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateacoountsComponent]
    });
    fixture = TestBed.createComponent(CreateacoountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
