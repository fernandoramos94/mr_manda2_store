/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  dummy: any[] = [];
  users: any[] = [];
  constructor(
    public api: ApisService,
    public util: UtilService,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.getChats();
  }


  getChats() {
    const param = {
      id: localStorage.getItem('uid')
    };
    this.dummy = Array(10);
    this.api.post('chats/getByGroup', param).then((data: any) => {
      console.log(data);
      if (data && data.status === 200) {
        const info = [];
        data.data.forEach(element => {
          info.push(element.from_id);
          info.push(element.room_id);
        });
        let uniq = [...new Set(info)];
        uniq = uniq.filter(x => x !== localStorage.getItem('uid'));
        console.log('uniq->>', uniq);
        const uid = {
          id: uniq.join()
        };
        this.api.post('users/getChatsNames', uid).then((uids: any) => {
          this.dummy = [];
          if (uids && uids.status === 200) {
            this.users = uids.data;
          }
        }, error => {
          console.log(error);
          this.users = [];
          this.dummy = [];
          this.util.errorToast(this.util.translate('Something went wrong'));
        });
      } else {
        this.dummy = [];
      }
    }, error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }
  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  onAdmin() {
    const param: NavigationExtras = {
      queryParams: {
        id: 0,
        name: 'Support'
      }
    };
    this.router.navigate(['inbox'], param);
  }

  onChat(item) {
    const param: NavigationExtras = {
      queryParams: {
        id: item.id,
        name: item.first_name + ' ' + item.last_name
      }
    };
    this.router.navigate(['inbox'], param);
  }
}
