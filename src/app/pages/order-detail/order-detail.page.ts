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
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController, ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { SelectDriversPage } from '../select-drivers/select-drivers.page';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import * as moment from 'moment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.page.html',
    styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
    id: any;
    grandTotal: any;
    orders: any[] = [];
    serviceTax: any;
    status: any;
    time: any;
    total: any;
    uid: any;
    address: any;
    restId: any;
    restName: any;
    rest:any = {};
    userName: any;
    userEmail: any;
    userPic: any;
    phone: any;
    token: any;
    did: any;
    deliveryAddress: any;
    changeStatusOrder: any;
    drivers: any[] = [];
    dummyDriver: any[] = [];
    userLat: any;
    userLng: any;
    paid: any;
    orderString: any[] = [];
    loaded: boolean;
    deliveryCharge: any;

    driverId: any;
    driverName: any;
    driverMobile: any;
    driverCover: any;
    driverFCM: any;

    orderNotes: any = '';
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public api: ApisService,
        public util: UtilService,
        private navCtrl: NavController,
        private printer: Printer,
        private modalController: ModalController,
        private iab: InAppBrowser) {
        this.loaded = false;
        this.route.queryParams.subscribe(data => {
            this.id = data.id;
            this.getOrder();
        });
    }

    ngOnInit() {

    }

    back() {
        this.util.publishNewAddress('hello');
        this.navCtrl.back();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SelectDriversPage,
            backdropDismiss: false,
            showBackdrop: true,
            componentProps: {
                item: this.dummyDriver
            }
        });
        modal.onDidDismiss().then((data) => {
            if (data && data.role === 'selected') {
                if (data.data && data.data.length) {
                    const param = {
                        id: this.id,
                        status: 'accepted',
                        did: data.data[0].id
                    };
                    this.util.show(this.util.translate('Por favor espere'));
                    this.api.post('orders/editList', param).then((order) => {
                        if (order && order.status === 200) {
                            const driverParam = {
                                id: data.data[0].id,
                                current: 'busy'
                            };
                            this.api.post('drivers/edit_profile', driverParam).then((driver) => {
                                if (driver && driver.status === 200) {
                                    this.util.hide();
                                    this.api.sendNotification(this.util.translate('New Order Received '),
                                        this.util.translate('New Order'), data.data[0].fcm_token);
                                    const msg = this.util.translate('Your Order is ') + 'accepted' + this.util.translate(' By ') + this.restName;
                                    this.api.sendNotification(msg, 'Order ' + 'accepted', this.token);
                                    Swal.fire({
                                        title: this.util.translate('success'),
                                        text: this.util.translate('Order status changed to ') + 'accepted',
                                        icon: 'success',
                                        timer: 2000,
                                        backdrop: false,
                                        background: 'white'
                                    });
                                    this.util.publishOrder();
                                    this.navCtrl.back();
                                } else {
                                    this.util.hide();
                                    this.util.errorToast(this.util.translate('Se ha presentado un error'));
                                    this.navCtrl.back();
                                }
                            }, error => {
                                this.util.hide();
                                this.util.errorToast(this.util.translate('Se ha presentado un error'));
                            }).catch(error => {
                                this.util.hide();
                                this.util.errorToast(this.util.translate('Se ha presentado un error'));
                            });
                            // edit_profile
                        } else {
                            this.util.hide();
                            this.util.errorToast(this.util.translate('Se ha presentado un error'));
                            this.navCtrl.back();
                        }
                    }, error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Se ha presentado un error'));
                    }).catch(error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Se ha presentado un error'));
                    });
                }
            }
        });
        await modal.present();
    }

    async getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    getUserInfo(uid) {
        const param = {
            id: uid
        };

        this.api.post('users/getById', param).then((data) => {
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                this.userName = info.first_name + ' ' + info.last_name;
                this.phone = info.mobile;
                this.token = info.fcm_token;
                this.userEmail = info.email;
                this.userPic = info.cover;
            }
        }, error => {
            this.util.errorToast('Se ha presentado un error');
        }).catch((error) => {
            this.util.errorToast('Se ha presentado un error');
        });
    }

    getDriverInfo() {
        const param = {
            id: this.driverId
        };
        this.api.post('drivers/getById', param).then((data: any) => {
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                this.driverName = info.first_name + ' ' + info.last_name;
                this.driverMobile = info.mobile;
                this.driverCover = info.cover;
                this.driverFCM = info.fcm_token;
            }
        }, error => {
            this.util.errorToast('Se ha presentado un error');
        }).catch((error) => {
            this.util.errorToast('Se ha presentado un error');
        });
    }

    getDrivers() {
        this.api.get('drivers').then((data) => {
            if (data && data.status === 200 && data.data.length) {
                const drivers = data.data.filter(x => x.status === '1');
                drivers.forEach(async (element) => {
                    const distance = await this.getDistanceFromLatLonInKm(
                        this.rest.lat,
                        this.rest.lng,
                        parseFloat(element.lat),
                        parseFloat(element.lng));
                        console.log(element.id, distance);
                    if (distance < 50) {
                        element['distance'] = distance.toFixed(2);
                        element["on"] = true;
                        this.drivers.push(element);
                        this.dummyDriver.push(element);
                    }
                });
            }
        }, error => {
            this.util.errorToast('Se ha presentado un error');
        }).catch((error) => {
            this.util.errorToast('Se ha presentado un error');
        });

    }

    async getOrder() {
        const param = {
            id: this.id
        };
        this.api.post('orders/getById', param).then((datas: any) => {
            this.loaded = true;
            if (datas && datas.status === 200 && datas.data.length) {
                const data = datas.data[0];
                this.grandTotal = data.grand_total;
                this.orders = JSON.parse(data.orders);
                this.serviceTax = data.serviceTax;
                this.status = data.status;
                this.time = moment(data.time).format('llll');
                this.total = data.total;
                this.paid = data.pay_method;
                this.orderNotes = data.notes;
                this.deliveryCharge = data.delivery_charge;
                if (data && data.did !== '') {
                    this.driverId = data.did;
                    this.getDriverInfo();
                }
                if (data && data.address) {
                    const add = JSON.parse(data.address);
                    this.deliveryAddress = add.house + ' ' + add.landmark + ' ' + add.address + add.pincode;
                    this.userLat = add.lat;
                    this.userLng = add.lng;
                }
                this.getUserInfo(data.uid);

                this.getRestInfo(data.restId);
                
                
                this.restName = data.str_name;
                this.orders.forEach(element => {
                    if (element && element.selectedItem && element.selectedItem.length > 0) {
                        let items = '';
                        element.selectedItem.forEach((subItems, j) => {
                            const subDatas = [];
                            items = '<div style="border-bottom:1px dashed lightgray"> <p style="font-weight:bold"> ' + element.name + ' X ' +
                                element.selectedItem[j].total + '##ITEWS## </p></div>';
                            subItems.item.forEach((addons, k) => {
                                subDatas.push('<div style="display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold;color:gray;margin:0px;"> -' +
                                    addons.name + '</p> <p style="font-weight:bold;color:gray;margin:0px;">' + this.getCurrency() + ' ' + addons.value + '</p> </div> ');
                            });
                            const subOrders = subDatas.join('');
                            const info = items.replace('##ITEWS##', subOrders);
                            this.orderString.push(info);
                        });
                    } else {
                        const items = '<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold"> ' +
                            element.name + ' X ' +
                            element.quantiy + ' </p> <p style="font-weight:bold">' + element.price + this.getCurrency() + '</p> </div>';
                        this.orderString.push(items);
                    }
                });
            }
        }, error => {
            this.loaded = true;
            this.util.errorToast('Se ha presentado un error');
        }).catch(error => {
            this.loaded = true;
            this.util.errorToast('Se ha presentado un error');
        });

    }
    getRestInfo(id){
        const param = {
          id: id
        };
        this.api.post('users/getById', param).then((data) => {
          this.rest = data.data[0];
          this.getDrivers();
        }, error => {
          this.util.errorToast('Algo ha ido mal');
        }).catch((error) => {
          this.util.errorToast('Algo ha ido mal');
        });
      }

    goToTracker() {
        const navData: NavigationExtras = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
    }

    getCurrency() {
        return '$';
    }

    autoAssignment() {
        if (this.drivers && this.drivers.length) {

            const dat = this.drivers.filter(x => x.on === true)
            const max = dat.reduce((prev, current) => (prev.distance < current.distance) && (current.on == true) ? prev : current)
            if (max && max.id) {
                
                const param = {
                    id: this.id,
                    status: 'aceptada',
                    did: max.id
                };
                const params = {
                    id: max.id
                };

                this.api.post('orders/getByDriverId', params).then((data) => {
                    const ddd = data.data.filter(x => x.status === 'aceptada' || x.status == "en camino");

                    if (ddd.length >= 2) {
                        this.drivers.filter(d => {
                            if(d.id == max.id){
                                d.on = false;
                            }
                        });
                        this.autoAssignment();
                    } else {
                        this.util.show(this.util.translate('Espere por favor'));
                        this.asignarlo(param, max);
                    }
                })             
            } else {
                this.util.errorToast('No se encontraron Drivers cercanos, intenta nuevamente en un par de de minutos.');
            }
        } else {
            this.util.errorToast('No se encontro ningun repartidor activo');
        }
    }

    asignarlo(param, max) {
        this.api.post('orders/editList', param).then((order) => {
            if (order && order.status === 200) {
                const driverParam = {
                    id: max.id,
                    current: 'busy'
                };
                this.api.post('drivers/edit_profile', driverParam).then((driver) => {
                    if (driver && driver.status === 200) {
                        this.util.hide();
                        this.api.sendNotification(this.util.translate('Nueva orden recibida '),
                            this.util.translate('Nueva orden'), max.fcm_token);
                        const msg = this.util.translate('Tu orden es ') + 'aceptada' + this.util.translate(' por ') + this.restName;
                        this.api.sendNotification(msg, 'Orden ' + 'aceptada', this.token);
                        Swal.fire({
                            title: this.util.translate('success'),
                            text: this.util.translate('El estado de la orden cambio ha ') + 'aceptada.',
                            icon: 'success',
                            timer: 2000,
                            backdrop: false,
                            background: 'white'
                        });
                        this.util.publishOrder();
                        this.navCtrl.back();
                    } else {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Se ha presentado un error'));
                        this.navCtrl.back();
                    }
                }, error => {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Se ha presentado un error'));
                }).catch(error => {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Se ha presentado un error'));
                });
                // edit_profile
            } else {
                this.util.hide();
                this.util.errorToast(this.util.translate('Se ha presentado un error'));
                this.navCtrl.back();
            }
        }, error => {
            this.util.hide();
            this.util.errorToast(this.util.translate('Se ha presentado un error'));
        }).catch(error => {
            this.util.hide();
            this.util.errorToast(this.util.translate('Se ha presentado un error'));
        });
    }

    changeStatus(value) {
        if (value === 'aceptada') {
            if (this.util.driver_assignments === '0') {
                this.presentModal();
            } else {
                this.autoAssignment();
            }
        } else if (value === 'en camino') {
            const param = {
                id: this.id,
                status: value,
            };
            this.util.show(this.util.translate('Espere por favor'));
            this.api.post('orders/editList', param).then((order) => {
                this.util.hide();
                if (order && order.status === 200) {
                    const msg = this.util.translate('Your Order is ') + value + this.util.translate(' By ') + this.restName;
                    this.api.sendNotification(msg, 'Order ' + value, this.token);
                    Swal.fire({
                        title: this.util.translate('success'),
                        text: this.util.translate('Order status changed to ') + value,
                        icon: 'success',
                        timer: 2000,
                        backdrop: false,
                        background: 'white'
                    });
                    this.util.publishOrder();
                    this.navCtrl.back();
                } else {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Se ha presentado un error'));
                    this.navCtrl.back();
                }
            }, error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Se ha presentado un error'));
            }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Se ha presentado un error'));
            });
        } else {
            const param = {
                id: this.id,
                status: value,
                did: this.driverId
            };
            this.util.show(this.util.translate('Espere por favor'));
            this.api.post('orders/editList', param).then((order) => {
                if (order && order.status === 200) {
                    const driverParam = {
                        id: this.driverId,
                        current: 'active'
                    };
                    this.api.post('drivers/edit_profile', driverParam).then((driver) => {
                        if (driver && driver.status === 200) {
                            this.util.hide();
                            this.api.sendNotification(this.util.translate('El estado de la orden cambio'),
                                this.util.translate('El estado de la orden cambio'), this.driverFCM);
                            const msg = this.util.translate('Tu orden es ') + value + this.util.translate(' por ') + this.restName;
                            this.api.sendNotification(msg, 'Orden ' + value, this.token);
                            Swal.fire({
                                title: this.util.translate('success'),
                                text: this.util.translate('El estado de la orden cambio a ') + value,
                                icon: 'success',
                                timer: 2000,
                                backdrop: false,
                                background: 'white'
                            });
                            this.util.publishOrder();
                            this.navCtrl.back();
                        } else {
                            this.util.hide();
                            this.util.errorToast(this.util.translate('Se ha presentado un error'));
                            this.navCtrl.back();
                        }
                    }, error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Se ha presentado un error'));
                    }).catch(error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Se ha presentado un error'));
                    });
                    // edit_profile
                } else {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Se ha presentado un error'));
                    this.navCtrl.back();
                }
            }, error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Se ha presentado un error'));
            }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Se ha presentado un error'));
            });
        }

    }

    changeOrderStatus() {
        if (this.changeStatusOrder) {
            this.changeStatus(this.changeStatusOrder);
        }
    }

    call() {
        if (this.phone) {
            this.iab.create('tel:' + this.phone, '_system');
        } else {
            this.util.errorToast(this.util.translate('Number not found'));
        }
    }

    driverCall() {
        if (this.driverMobile) {
            this.iab.create('tel:' + this.driverMobile, '_system');
        } else {
            this.util.errorToast(this.util.translate('Number not found'));
        }
    }

    email() {
        if (this.userEmail) {
            this.iab.create('mailto:' + this.userEmail, '_system');
        } else {
            this.util.errorToast(this.util.translate('Email not found'));
        }
    }

    printOrder() {
        const options: PrintOptions = {
            name: 'Foodie Order Summary',
            duplex: false,
        };
        const order = this.orderString.join('');
        const content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">Foodies Order Summary</h2> <p style="float: left;"><b>' + this.id + '</b></p> <p style="float: left;"><b>' + this.restName + '</b></p> <p style="float: left;"><b>' + this.userName + '</b></p> <p style="float: left;">' + this.time + ' </p> <p style="font-weight: bold;">' + this.util.translate('ITEMS') + '</p> ' + order + ' <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('SubTotal') + '</span> <span style="float: right;font-weight: bold;">$' + this.total + '</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Delivery Charge') + '</span> <span style="float: right;font-weight: bold;">$5</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Service Tax') + '</span> <span style="float: right;font-weight: bold;">$' + this.serviceTax + '</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Total') + '</span> <span style="float: right;font-weight: bold;">$' + this.grandTotal + '</span> </p> <h1 style="text-align: center;text-transform: uppercase;">' + this.paid + '</h1> </div>';
        this.printer.print(content, options).then((data) => {
        }).catch(error => {
        });
    }
}
