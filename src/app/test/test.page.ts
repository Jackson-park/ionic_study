import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  id: number;
  data: Student;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Student();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['/tabs/tab2']);
    })
  }
  back() {
    window.history.back();
  }
}
