import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    public alertController: AlertController,
    private http: HttpClient
  ) { }


  async presentAlert(title: string = '', msg: string = '') {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: title,
      message: msg,
      buttons: ['확인']
    });

    await alert.present();
  }
  post() {
    let headers = new HttpHeaders({
      'Accept': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'Bearer ' + apikey
    });
    let body: any = null;
    this.http.post('http://test.smilepass.co.kr/join', JSON.stringify(body), { headers: headers }).subscribe(data => {
      let res: any = data;
      if (res.code == "success") {
        this.presentAlert("알림", res.msg);
      }
      else {
        this.presentAlert("알림", res.msg);
      }
    }, err => {
      console.log(err);
    });
  }
}
