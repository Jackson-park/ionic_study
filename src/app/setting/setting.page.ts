import { Component, Input, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SharedService } from '../shared.service';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  ver: string = '';
  nCheck: Boolean;
  title: string;
  techs: any;
  constructor(
    public sharedService: SharedService,
    private nav: NavController
  ) {
    this.ver = '0.1.1';
  }
  logout() {
    // window.location.href = "/tabs/tab1";
    this.nav.navigateRoot('/tabs/tab1');
  }
  notice() {
    setTimeout(() => {
      if (this.nCheck == true) {
        this.sharedService.presentAlert('알림', '마케팅 알림이 설정되었습니다.')
      }
      else {
        this.sharedService.presentAlert('알림', '마케팅 알림이 해제되었습니다.')
      }
    })

  }
  ngOnInit() {

  }

  goProfile() {
    this.nav.navigateForward('/profile')
  }
}
