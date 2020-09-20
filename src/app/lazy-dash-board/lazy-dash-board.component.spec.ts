import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDashBoardComponent } from './lazy-dash-board.component';

describe('LazyDashBoardComponent', () => {
  let component: LazyDashBoardComponent;
  let fixture: ComponentFixture<LazyDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
