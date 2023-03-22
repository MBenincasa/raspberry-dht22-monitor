import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDayMonitorDataComponent } from './single-day-monitor-data.component';

describe('SingleDayMonitorDataComponent', () => {
  let component: SingleDayMonitorDataComponent;
  let fixture: ComponentFixture<SingleDayMonitorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDayMonitorDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDayMonitorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
