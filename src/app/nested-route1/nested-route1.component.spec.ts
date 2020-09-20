import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoute1Component } from './nested-route1.component';

describe('NestedRoute1Component', () => {
  let component: NestedRoute1Component;
  let fixture: ComponentFixture<NestedRoute1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRoute1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRoute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
