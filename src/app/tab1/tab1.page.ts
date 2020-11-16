import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  arr: any = [];
  segment: string = '';
  todayStep: number = 0;
  lat;
  lng;
  distance: number = 0;
  state: boolean = false;
  xOrient: number;
  yOrient: number;
  zOrient: number;
  timestamp: number;
  motionX: number;
  motionY: number;
  motionZ: number;
  motionTimestamp: number;
  constructor(
    private router: Router,
    public geolocation: Geolocation,
    private gyroscope: Gyroscope,
    private deviceMotion: DeviceMotion,
    public sharedService: SharedService
  ) {


    // this.loadList();
  }

  // loadList() {
  //   for (let i = 0; i < 10; i++) {
  //     this.arr.push({
  //       number: i,
  //       title: "번째 입니다."
  //     });
  //   }
  //   console.log(this.arr);
  // }

  ngOnInit() {

  }

  Motion() {
    //기기 가속 가져오기
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
      (error: any) => console.log(error)
      );
    
    // 기기 가속 보기
    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.motionX = acceleration.x;
      this.motionY = acceleration.y;
      this.motionZ = acceleration.z;
      this.motionTimestamp = acceleration.timestamp;
      console.log(acceleration);
    });
    
    // Stop watch
    // subscription.unsubscribe();
  }

  Gyroscope() {
    let options: GyroscopeOptions = {
      frequency: 1000
    }

    this.gyroscope.getCurrent(options)
      .then((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        this.xOrient = orientation.x;
        this.yOrient = orientation.y;
        this.zOrient = orientation.z;
        this.timestamp = orientation.timestamp;
      })
      .catch()


    this.gyroscope.watch()
      .subscribe((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        this.xOrient = orientation.x;
        this.yOrient = orientation.y;
        this.zOrient = orientation.z;
        this.timestamp = orientation.timestamp;
      });
  }
  go() {
    this.router.navigateByUrl('/test');
  }

  stepAdd() {
    if (this.todayStep < 10000) {
      this.todayStep += 1;
      this.distance = this.todayStep * 0.5;
    }
  }

  pointAdd() {
    this.state = true;
    this.sharedService.presentAlert("알림", "적립되었습니다.");
  }
  whereIam() {
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res) => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
    }).catch((e) => {
      console.log(e);
    });
  }


}
