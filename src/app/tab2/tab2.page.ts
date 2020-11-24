import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { getLocaleDirection } from '@angular/common';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
declare var google;

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
  };

  map: any;
  marker: any;
  latitude: any = "";
  longitude: any = "";
  timestamp: any = "";
  lat;
  lng;
  data: Student;
  studentsData: any;
  constructor(
    private http: HttpClient,
    public sharedService: SharedService,
    public platform: Platform,
    public geolocation: Geolocation,
    public apiService: ApiService,
    public router: Router
  ) {
    this.platform.ready().then(() => {
      var mapOptions = {
        center: { lat: 23.2366, lng: 79.3822 },
        zoom: 7
      }
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // this.GetLocation();
    })
    this.data = new Student();
    this.studentsData = [];
  }
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
    });
    this.sharedService.presentAlert("등록", "회원이 등록되었습니다.");
  }
  gomemberList() {
    this.router.navigate(['/test2']);
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllStudents();
  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;
    })
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllStudents();
    });
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

  // GetLocation() {
  //   var ref = this;
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((position) => {
  //     var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     if (ref.marker == null) {
  //       ref.marker = new google.maps.Marker({
  //         position: gps,
  //         map: ref.map,
  //         title: 'my position'
  //       })
  //     }
  //     else {
  //       ref.marker.setPosition(gps);
  //     }
  //     ref.map.panTo(gps);
  //     ref.latitude = position.coords.latitude.toString();
  //     ref.longitude = position.coords.longitude.toString();
  //     ref.timestamp = (new Date(position.timestamp)).toString();
  //   })
  // }



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
