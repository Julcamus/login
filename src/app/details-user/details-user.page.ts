import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../services/api.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.page.html',
  styleUrls: ['./details-user.page.scss'],
})
export class DetailsUserPage implements OnInit {
  id: string;
  userPicture;
  firstName;
  lastName;
  email;
  age;
  ville;
  phone;
  nat;
  gender;
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private nvc: NavController) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.apiService.getItem(this.id).subscribe(response => {
      this.userPicture = response.picture.large;
      this.firstName = response.name.first;
      this.lastName = response.name.last;
      this.email = response.email;
      this.phone = response.phone;
      this.nat = response.nat;
      this.ville = response.location.city;
      this.age = response.dob.age;
      this.gender = response.gender;
    });
  }
  goToUserList() {
    this.nvc.navigateRoot('user-list' );
  }


}
