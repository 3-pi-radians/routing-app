import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySubView2Component } from './lazy-sub-view2.component';

describe('LazySubView2Component', () => {
  let component: LazySubView2Component;
  let fixture: ComponentFixture<LazySubView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySubView2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySubView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
