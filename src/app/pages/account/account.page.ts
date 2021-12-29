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
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  name: any = '';
  images: any[] = [];
  cover: any = '';
  address: any = '';
  open: any = '';
  close: any = '';
  constructor(
    private router: Router,
    public api: ApisService,
    private navCtrl: NavController,
    public util: UtilService
  ) {
    this.getProfile();
    this.util.obserProfile().subscribe(data => {
      this.getProfile();
    });
  }

  getProfile() {
    if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(this.util.store.images)) {
      this.images = JSON.parse(this.util.store.images);
    }
  }

  ngOnInit() {
    this.getReviews();
  }


  ionViewWillEnter() {

    this.getProfile();
  }

  getReviews() {

  }

  goToAddCategoty() {
    this.router.navigate(['/category']);
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  goToOrder() {
    this.router.navigate(['/orders']);
  }


  AddFoods() {
    this.router.navigate(['/foods']);
  }
  venueDetails() {
    this.router.navigate(['venue-profile']);
  }

  orders() {
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  reset() {
    this.router.navigate(['reset']);
  }

  goToAbout() {
    this.navCtrl.navigateRoot(['tabs/tab3/about']);
  }

  goToContact() {
    this.navCtrl.navigateRoot(['tabs/tab3/contacts']);
  }

  goLangs() {
    this.navCtrl.navigateRoot(['tabs/tab3/languages']);
  }

  goToChats() {
    this.router.navigate(['chats']);
  }

  goFaqs() {
    this.navCtrl.navigateRoot(['tabs/tab3/faqs']);
  }

  goHelp() {
    this.navCtrl.navigateRoot(['tabs/tab3/help']);
  }

  logout() {
    localStorage.removeItem('uid');
    this.navCtrl.navigateRoot(['']);
  }

  reviews() {
    this.navCtrl.navigateRoot(['tabs/tab3/review']);
  }
}
