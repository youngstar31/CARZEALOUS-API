import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarViewPage } from './car-view.page';

describe('CarViewPage', () => {
  let component: CarViewPage;
  let fixture: ComponentFixture<CarViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
