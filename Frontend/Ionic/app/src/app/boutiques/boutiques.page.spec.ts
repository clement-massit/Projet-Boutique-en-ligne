import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoutiquesPage } from './boutiques.page';

describe('BoutiquesPage', () => {
  let component: BoutiquesPage;
  let fixture: ComponentFixture<BoutiquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoutiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
