import { Component, OnInit } from '@angular/core';
import { IOrder } from '../models/order.model';
import { OrderService } from '../service/order/order.service';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.page.html',
  styleUrls: ['./cart-confirm.page.scss'],
})
export class CartConfirmPage implements OnInit {
  order: IOrder = new IOrder();
  valorTotal = 0;
  ceps: any = [];

  constructor(
    private orderSvc: OrderService,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.valorTotal = +localStorage.getItem('valorTotal');
    this.order = JSON.parse(localStorage.getItem('lstAllProducts'));

    this.getCep();
  }

  getCep(){
    this.orderSvc.getCep().subscribe(result => {
      this.ceps = result;
    });
    console.log(this.ceps);
  }

  createOrder(){
    this.order.status = 'inicializado';
    this.orderSvc.createOrder(this.order).subscribe();
    console.log(this.order);
  }

}
