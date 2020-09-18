import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  welcome: string = '';
  smilepoint: string = '';
  smilepoint_num: number = 100;
  arr: any = [];
  testnumber: number = 100;


  constructor(
    private router: Router
  ) {
    this.welcome = '회원님 환영합니다.';
    this.smilepoint = "스마일 포인트";
    this.loadList();
  }

  loadList() {
    for (let i = 0; i < 10; i++) {
      this.arr.push({
        number: i,
        title: "번째 입니다."
      });
    }
    console.log(this.arr);
  }
  addpoint() {
    this.smilepoint_num += 10;
  }

  go() {
    this.router.navigateByUrl('/test');
  }
}
