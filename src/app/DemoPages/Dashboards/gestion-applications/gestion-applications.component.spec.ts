import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionApplicationsComponent } from './gestion-applications.component';

describe('GestionApplicationsComponent', () => {
  let component: GestionApplicationsComponent;
  let fixture: ComponentFixture<GestionApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
