import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Predict1Component } from './predict1.component';

describe('Predict1Component', () => {
  let component: Predict1Component;
  let fixture: ComponentFixture<Predict1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Predict1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Predict1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
