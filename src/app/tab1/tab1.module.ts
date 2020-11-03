import { IonicModule, NavParams } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { flatten } from '@angular/compiler';

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
      toFixed: 0,
      maxPercent: 10000,
      // unitsFontWeight: "500",
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: "#1b5ce9d7",
      outerStrokeGradientStopColor: "#e29f48",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 10,
      // title: "jackson",
      titleFontSize: "50",
      titleFontWeight: "1000",
      subtitleFontSize: "15",
      subtitle: "목표: 10000",
      animateTitle: true,
      animationDuration: 500,
      animation: true,
      showUnits: false,
      showBackground: false,
      startFromZero: false
    })
  ],
  declarations: [Tab1Page],

})
export class Tab1PageModule { }
