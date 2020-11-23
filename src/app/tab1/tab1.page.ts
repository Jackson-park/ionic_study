import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { SharedService } from '../shared.service';
import { Geofence } from '@ionic-native/geofence/ngx';
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
    public sharedService: SharedService,
    private geofence: Geofence
  ) {

    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )
    geofence.getWatched()
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
    // this.addGeofence();
  }

  private addGeofence() {
    //options describing geofence
    let fence = {
      id: '69ca1asdfb88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
      latitude:       37.40173815275911, //center of geofence radius
      longitude:      126.96884846800872,
      radius:         2, //radius to edge of geofence in meters
      transitionType: 1, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          '박재성 사원 자리 도착', //notification title
          text:           '박재성 사원 자리에 도착했습니다.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => {
         console.log('Geofence added');
         this.sharedService.presentAlert('알림', '센터가 설정되었습니다.');
        },
       (err) => {
        console.log('Geofence failed to add');
        this.sharedService.presentAlert('알림', '센터가 설정되지 않았습니다.');
       }
     );
  }

  Motion() {
    //기기 가속 가져오기
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => {
        this.motionX = acceleration.x;
        this.motionY = acceleration.y;
        this.motionZ = acceleration.z;
        this.motionTimestamp = acceleration.timestamp;
        console.log(acceleration);
        (error: any) => console.log("모션에러");
      });
    
    // 기기 가속 보기
    // var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   this.motionX = acceleration.x;
    //   this.motionY = acceleration.y;
    //   this.motionZ = acceleration.z;
    //   this.motionTimestamp = acceleration.timestamp;
    //   console.log(acceleration);
    // });
    
    // Stop watch
    // subscription.unsubscribe();
  }

  Gyroscope() {
    let options: GyroscopeOptions = {
      frequency: 1000
    }

    this.gyroscope.getCurrent(options)
      .then((orientation: GyroscopeOrientation) => {
        console.log(orientation);
        // this.xOrient = orientation.x;
        // this.yOrient = orientation.y;
        // this.zOrient = orientation.z;
        // this.timestamp = orientation.timestamp;
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
      // this.distance = this.todayStep * 0.7;
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
