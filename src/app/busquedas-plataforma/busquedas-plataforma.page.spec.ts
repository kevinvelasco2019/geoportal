import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusquedasPlataformaPage } from './busquedas-plataforma.page';

describe('BusquedasPlataformaPage', () => {
  let component: BusquedasPlataformaPage;
  let fixture: ComponentFixture<BusquedasPlataformaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedasPlataformaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusquedasPlataformaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
