import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusquedasPage } from './busquedas.page';

describe('BusquedasPage', () => {
  let component: BusquedasPage;
  let fixture: ComponentFixture<BusquedasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusquedasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
