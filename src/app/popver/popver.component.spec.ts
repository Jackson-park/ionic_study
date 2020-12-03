import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopverComponent } from './popver.component';

describe('PopverComponent', () => {
  let component: PopverComponent;
  let fixture: ComponentFixture<PopverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
