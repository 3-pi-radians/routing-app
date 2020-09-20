import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyView1Component } from './lazy-view1.component';

describe('LazyView1Component', () => {
  let component: LazyView1Component;
  let fixture: ComponentFixture<LazyView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyView1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
