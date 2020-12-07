import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { IPedometerData, Pedometer } from '@ionic-native/pedometer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  arr: any = [];
  
  todayStep: number = 0;
  distance: number = 0;
  state: boolean = false;
  
  pedoStep: number;
  pedostartDate: any;
  pedoendDate: any;
  stepTime: number = 0;
  constructor(
    private router: Router,
    public sharedService: SharedService,
    public Pedometer: Pedometer
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
    // this.addGeofence();
  }

  startPedo() {
    this.Pedometer.isDistanceAvailable()
    .then((availalbe: true) => {
      console.log(availalbe);
    })
    .catch((error: any) => console.log(error));

    this.Pedometer.startPedometerUpdates()
    .subscribe((data: IPedometerData) => {
      console.log("걸음 데이터", data);
      this.todayStep += data.numberOfSteps;
      this.distance += data.distance;
      this.pedostartDate = data.startDate;
      this.pedoendDate = data.endDate;
      this.stepTime += (data.endDate - data.startDate)/600000;
      this.startPedo();

   });

  }
  stopPedo() {
    this.Pedometer.stopPedometerUpdates()
    .then((available: true) => {
      console.log(available);
    })
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
}