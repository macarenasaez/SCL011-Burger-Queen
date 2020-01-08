import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerComponent } from './burguer.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('BurguerComponent', () => {
  let component: BurguerComponent;
  let fixture: ComponentFixture<BurguerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurguerComponent ],
      imports: [
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
