import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererTerminalComponent } from './gerer-terminal.component';

describe('GererTerminalComponent', () => {
  let component: GererTerminalComponent;
  let fixture: ComponentFixture<GererTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
