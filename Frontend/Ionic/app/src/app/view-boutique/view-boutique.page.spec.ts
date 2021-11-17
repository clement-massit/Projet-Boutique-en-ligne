import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBoutiquePage } from './view-boutique.page';

describe('ViewBoutiquePage', () => {
  let component: ViewBoutiquePage;
  let fixture: ComponentFixture<ViewBoutiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBoutiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBoutiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
