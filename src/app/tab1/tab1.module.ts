import { IonicModule, NavParams } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { flatten } from '@angular/compiler';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Gyroscope } from '@ionic-native/gyroscope/ngx';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { Geofence } from '@ionic-native/geofence/ngx';
import { Pedometer } from '@ionic-native/pedometer/ngx';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      space: -10,
      // toFixed: 2,
      maxPercent: 10000,
      // unitsFontWeight: "500",
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: "#ffcd00",
      outerStrokeGradientStopColor: "#ffcd00",
      innerStrokeColor: "#dcdcdc",
      innerStrokeWidth: 10,
      // title: "jackson",
      titleFontSize: "40",
      titleFontWeight: "800",
      subtitleFontSize: "15",
      // subtitle: "목표: 10000",
      animateTitle: true,
      animationDuration: 500,
      animation: true,
      showUnits: false,
      showBackground: false,
      startFromZero: false
    })
  ],
  declarations: [Tab1Page],
  providers: [
    Geolocation,
    Gyroscope,
    DeviceMotion,
    Geofence,
    Pedometer
  ],

})
export class Tab1PageModule { }
