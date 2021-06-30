import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneterminalComponent } from './oneterminal.component';

describe('OneterminalComponent', () => {
  let component: OneterminalComponent;
  let fixture: ComponentFixture<OneterminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneterminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
