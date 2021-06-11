import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationParamComponent } from './configuration-param.component';

describe('ConfigurationParamComponent', () => {
  let component: ConfigurationParamComponent;
  let fixture: ComponentFixture<ConfigurationParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
