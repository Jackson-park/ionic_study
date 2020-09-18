import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  ver: string = '';
  nCheck: Boolean;
  constructor(
    public sharedService: SharedService
  ) {
    this.ver = '0.1.1';
  }
  logout() {
    window.location.href = "/tabs/tab1";
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
}
