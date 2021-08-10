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
    this.order.change_of_money = 0;
    this.getCep();
  }

  getCep(){
    this.orderSvc.getCep().subscribe(result => {
      this.ceps = result;
    });
  }

  createOrder(){
    if(this.order.client_name === null){
      console.log('erro, informe o nome do cliente');
    }
    else if(this.order.phone === null){
      console.log('erro, informe o numero do cliente');
    }
    else if(this.order.payment === null){
      console.log('erro, selecione a forma de pagamento');
    }
    else if(this.order.withdrawal === null){
      console.log('erro, selecione a forma de receber o produto');
    }
    else if( this.order.payment === 'dinheiro'){
      if(this.order.change_of_money < this.valorTotal || this.order.change_of_money === 0){
        console.log('erro, o valor do troco e menor do que o valor total');
      }
      else if(this.order.withdrawal === 'casa'){
        if(this.order.address_city === null || this.order.address_neighborhood === null ||
          this.order.address_number === null || this.order.address_street === null || this.order.cep === null){
          console.log('erro');
        }
        else{
          this.order.change_of_money = this.order.change_of_money - this.valorTotal;
          this.order.cost_freight = 5;
          this.order.total = this.valorTotal + this.order.cost_freight;
          this.order.status = 'inicializado';
          this.orderSvc.createOrder(this.order).subscribe();
          console.log(this.order);
        }
      }else if(this.order.withdrawal === 'local'){
        this.order.change_of_money = this.order.change_of_money - this.valorTotal;
        this.order.cost_freight = 5;
        this.order.total = this.valorTotal + this.order.cost_freight;
        this.order.status = 'inicializado';
        this.orderSvc.createOrder(this.order).subscribe();
        console.log(this.order);
      }
    }
    else if(this.order.payment !== 'dinheiro'){
      this.order.change_of_money = this.valorTotal;
      if(this.order.withdrawal === 'casa'){
        if(this.order.address_city === null || this.order.address_neighborhood === null ||
          this.order.address_number === null || this.order.address_street === null || this.order.cep === null){
          console.log('erro');
        }
        else{
          this.order.change_of_money = this.order.change_of_money - this.valorTotal;
          this.order.cost_freight = 5;
          this.order.total = this.valorTotal + this.order.cost_freight;
          this.order.status = 'inicializado';
          this.orderSvc.createOrder(this.order).subscribe();
          console.log(this.order);
        }
      }else if(this.order.withdrawal === 'local'){
        this.order.change_of_money = this.order.change_of_money - this.valorTotal;
        this.order.cost_freight = 5;
        this.order.total = this.valorTotal + this.order.cost_freight;
        this.order.status = 'inicializado';
        this.orderSvc.createOrder(this.order).subscribe();
        console.log(this.order);
      }
    }
    else if(this.order.withdrawal === 'casa'){
      if(this.order.address_city === null || this.order.address_neighborhood === null ||
        this.order.address_number === null || this.order.address_street === null || this.order.cep === null){
        console.log('erro');
      }
      else{
        this.order.change_of_money = this.order.change_of_money - this.valorTotal;
        this.order.cost_freight = 5;
        this.order.total = this.valorTotal + this.order.cost_freight;
        this.order.status = 'inicializado';
        this.orderSvc.createOrder(this.order).subscribe();
        console.log(this.order);
      }
    }else{
      this.order.change_of_money = this.order.change_of_money - this.valorTotal;
      this.order.cost_freight = 5;
      this.order.total = this.valorTotal + this.order.cost_freight;
      this.order.status = 'inicializado';
      this.orderSvc.createOrder(this.order).subscribe();
      console.log(this.order);
    }
  }

}
