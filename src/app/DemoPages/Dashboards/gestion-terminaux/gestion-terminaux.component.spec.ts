import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTerminauxComponent } from './gestion-terminaux.component';

describe('GestionTerminauxComponent', () => {
  let component: GestionTerminauxComponent;
  let fixture: ComponentFixture<GestionTerminauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTerminauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTerminauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
