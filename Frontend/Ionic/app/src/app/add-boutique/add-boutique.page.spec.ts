import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBoutiquePage } from './add-boutique.page';

describe('AddBoutiquePage', () => {
  let component: AddBoutiquePage;
  let fixture: ComponentFixture<AddBoutiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoutiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBoutiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
