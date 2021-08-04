import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido.model';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.page.html',
  styleUrls: ['./cart-confirm.page.scss'],
})
export class CartConfirmPage implements OnInit {
  pedido: Pedido;

  constructor() {
    this.pedido = new Pedido();
    this.pedido.products = new Array<Products>();
  }

  ngOnInit() {
  }

}
