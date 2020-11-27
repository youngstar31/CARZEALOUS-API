import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VersuzPage } from './versuz.page';

describe('VersuzPage', () => {
  let component: VersuzPage;
  let fixture: ComponentFixture<VersuzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersuzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VersuzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
