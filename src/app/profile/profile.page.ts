import { Component, ErrorHandler, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  body: any = [];
  height: any = [];
  weight: any = [];
  constructor(
    public sharedService: SharedService,
    private router: Router,
    public alertController: AlertController
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
    for (let i = 40; i <= 140; i++) {
          this.weight.push(i);
        }
  }
  async logout() {
    // this.sharedService.presentAlert("로그아웃", "로그아웃되었습니다.");
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
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigateByUrl('/tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
    // this.router.navigateByUrl('/tabs/tab1');
  }
}
