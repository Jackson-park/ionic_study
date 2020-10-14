import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MypagePage } from './mypage.page';

describe('MypagePage', () => {
  let component: MypagePage;
  let fixture: ComponentFixture<MypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
