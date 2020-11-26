import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
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
    TabsPageRoutingModule
  ],
  declarations: [TabsPage],
  providers: [
    Geolocation,
    Gyroscope,
    DeviceMotion,
    Geofence,
    Pedometer
  ],
})
export class TabsPageModule {}
