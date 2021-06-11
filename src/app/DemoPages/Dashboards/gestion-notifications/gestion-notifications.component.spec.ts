import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNotificationsComponent } from './gestion-notifications.component';

describe('GestionNotificationsComponent', () => {
  let component: GestionNotificationsComponent;
  let fixture: ComponentFixture<GestionNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
