import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoute2Component } from './nested-route2.component';

describe('NestedRoute2Component', () => {
  let component: NestedRoute2Component;
  let fixture: ComponentFixture<NestedRoute2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRoute2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
