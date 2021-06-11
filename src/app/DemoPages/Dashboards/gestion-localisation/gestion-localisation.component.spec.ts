import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLocalisationComponent } from './gestion-localisation.component';

describe('GestionLocalisationComponent', () => {
  let component: GestionLocalisationComponent;
  let fixture: ComponentFixture<GestionLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLocalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
