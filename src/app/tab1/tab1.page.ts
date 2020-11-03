import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
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
  constructor(
    private router: Router,
    public geolocation: Geolocation,
    private gyroscope: Gyroscope
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
      });
  }
  go() {
    this.router.navigateByUrl('/test');
  }

  stepAdd() {
    if (this.todayStep < 1000) {
      this.todayStep += 1;
      this.distance = this.todayStep * 0.5;
    }
  }

  pointAdd() {
    this.state = true;
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
