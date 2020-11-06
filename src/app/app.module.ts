import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Gyroscope } from '@ionic-native/gyroscope/ngx';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    SharedService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    Gyroscope,
    DeviceMotion,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
