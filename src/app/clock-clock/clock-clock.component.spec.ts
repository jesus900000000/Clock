import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockClockComponent } from './clock-clock.component';

describe('ClockClockComponent', () => {
  let component: ClockClockComponent;
  let fixture: ComponentFixture<ClockClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
