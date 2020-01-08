import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasComponent } from './mesas.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

describe('MesasComponent', () => {
  let component: MesasComponent;
  let fixture: ComponentFixture<MesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesasComponent, NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
