import { Component, ErrorHandler, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  body: any = [];
  height: any = [];
  weight: any = [];
  user: any = {
    weight: 0,
    height: 0,
    sex: Boolean,
    age: 0
  }
  constructor(
    public sharedService: SharedService,
    private router: Router,
    public alertController: AlertController,
    private nav: NavController
  ) {
    
  }

  ngOnInit() {
    
  }

  heightSet() {
    for (let i = 120; i <= 220; i++) {
          this.height.push(i);
        }
  }

  weightSet() {
    for (let i = 30; i <= 140; i++) {
          this.weight.push(i);
        }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: '로그아웃',
      message: '로그아웃을 하시겠습니까?',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '확인',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Ok');
            this.nav.navigateRoot('/tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
  }

  //가입탈퇴
  async withdraw() {
    const alert = await this.alertController.create({
      header: '탈퇴하기',
      message: '탈퇴하시면 스마일워크의 아이디와 모든 정보는 삭제됩니다.',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '탈퇴하기',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Ok');
            this.nav.navigateRoot('/tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
  }
}
