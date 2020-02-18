import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  UserData: any;

  constructor(private apiService: ApiService, private nvc: NavController) {
    this.UserData = [];
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.apiService.getUser().subscribe(response => {
      this.UserData = response;
    });
  }
  goToUserDetails(id) {
    this.nvc.navigateRoot('details-user/' + id );
  }
}
