import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySubViewComponent } from './lazy-sub-view.component';

describe('LazySubViewComponent', () => {
  let component: LazySubViewComponent;
  let fixture: ComponentFixture<LazySubViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySubViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
