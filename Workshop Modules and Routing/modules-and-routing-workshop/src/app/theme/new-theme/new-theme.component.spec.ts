import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThemeComponent } from './new-theme.component';

describe('NewThemeComponent', () => {
  let component: NewThemeComponent;
  let fixture: ComponentFixture<NewThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewThemeComponent]
    });
    fixture = TestBed.createComponent(NewThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
