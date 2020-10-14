import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  constructor(
    private router: Router,
    public geolocation: Geolocation
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
    alert('500포인트 적립되었습니다.');
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
