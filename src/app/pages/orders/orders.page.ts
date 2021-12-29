import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  seg_id = 1;
  newOrders: any[] = [];
  onGoingOrders: any[] = [];
  oldOrders: any[] = [];
  dummy = Array(10);
  constructor(
    public api: ApisService,
    public util: UtilService,
    private router: Router,
  ) {
    this.getOrders('', false);
    this.util.getOrder().subscribe((data) => {
      this.getOrders('', false);
    });
  }

  ngOnInit() {
    console.log('init');
  }
  doRefresh(event) {
    this.getOrders(event, true);
  }

  onClick(val) {
    this.seg_id = val;
  }

  goToOrderDetail(item) {
    console.log(item);
    const navData: NavigationExtras = {
      queryParams: {
        id: item
      }
    };
    this.router.navigate(['/order-detail'], navData);
  }

  getOrders(event, haveRefresh) {
    console.log(event);
    console.log(haveRefresh);
    const param = {
      id: localStorage.getItem('uid')
    };
    this.api.post('orders/getByStore', param).then((data) => {
      console.log(data);
      this.dummy = [];
      if (data && data.status === 200 && data.data) {
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        data.data.forEach(element => {
          element.order = JSON.parse(element.orders);
          element.time = moment(element.time).format('llll');
          if (element.status == 'en camino') {
            this.onGoingOrders.push(element);
          } else if (element.status === 'entregada' || element.status === 'cancelada' || element.status === 'rechazada') {
            this.oldOrders.push(element);
          }else{
            this.newOrders.push(element);
          }
        });
        if (haveRefresh) {
          event.target.complete();
        }
      }
    }).catch((error) => {
      console.log(error);
      this.dummy = [];
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }


}
