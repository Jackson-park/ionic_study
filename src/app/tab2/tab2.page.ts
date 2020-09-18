import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  userInfo: any = {
    id: "",
    passwd: "",
    passwd2: "",
    name: "",
    phone: "",
  }

  constructor(
    private http: HttpClient,
    public sharedService: SharedService
  ) {

  }

  joinNow() {
    if (this.userInfo.id == '') {
      this.sharedService.presentAlert("알림", "아이디를 입력해주세요.");
    }
    else if (this.userInfo.passwd == '') {
      this.sharedService.presentAlert("알림", "비밀번호를 입력해주세요.");
    }
    else if (this.userInfo.passwd2 == '') {
      this.sharedService.presentAlert("알림", "비밀번호 확인을 입력해주세요.");
    }
    else if (this.userInfo.passwd != this.userInfo.passwd2) {
      this.sharedService.presentAlert("알림", "비밀번호 확인이 일치하지 않습니다.");
    }
    else if (this.userInfo.name == '') {
      this.sharedService.presentAlert("알림", "이름을 입력해주세요.");
    }
    else if (this.userInfo.phone == '') {
      this.sharedService.presentAlert("알림", "휴대폰 번호를 입력해주세요.");
    }
    else {
      this.sharedService.post();
    }
    console.log(this.userInfo);
  }

  autoHypenPhone() {

    let str = this.userInfo.phone.replace(/[^0-9]/g, '');

    let tmp = '';

    if (str.length < 4) {
      this.userInfo.phone = str;
    }
    else if (str.length < 7) {
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3);
      this.userInfo.phone = tmp;
    }
    else if (str.length < 11) {
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6);
      this.userInfo.phone = tmp;
    }
    else if (str.length > 11) {
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6, 5);
      this.userInfo.phone = tmp;
    }

    else {
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 4);
      tmp += '-';
      tmp += str.substr(7);
      this.userInfo.phone = tmp;
    }
  }
}
