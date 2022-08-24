import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogListResultsComponent } from './log-list-results.component';

describe('LogListResultsComponent', () => {
  let component: LogListResultsComponent;
  let fixture: ComponentFixture<LogListResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogListResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogListResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
