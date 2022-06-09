import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGameComponent } from './set-game.component';

describe('SetGameComponent', () => {
  let component: SetGameComponent;
  let fixture: ComponentFixture<SetGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
