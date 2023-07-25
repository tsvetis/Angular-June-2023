import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxSimulationComponent } from './redux-simulation.component';

describe('ReduxSimulationComponent', () => {
  let component: ReduxSimulationComponent;
  let fixture: ComponentFixture<ReduxSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReduxSimulationComponent]
    });
    fixture = TestBed.createComponent(ReduxSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
