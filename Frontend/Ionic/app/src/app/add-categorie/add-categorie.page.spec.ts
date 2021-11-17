import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCategoriePage } from './add-categorie.page';

describe('AddCategoriePage', () => {
  let component: AddCategoriePage;
  let fixture: ComponentFixture<AddCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
