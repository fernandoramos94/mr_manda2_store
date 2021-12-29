/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { UtilService } from 'src/app/services/util.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  productName: any = '';
  desc: any = '';
  lists: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public util: UtilService
  ) {
    this.productName = this.navParams.get('name');
    this.desc = this.navParams.get('desc');
    this.lists = this.navParams.get('variations');
  }

  ngOnInit() {
  }

  closeIt() {
    console.log('it');
    this.modalController.dismiss();
  }


}
