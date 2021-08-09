/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetOptions } from '../models/meetOptions';
import { Product } from '../models/product.model';
import { OrderProduct } from '../models/orderProduct.model';
import { SelectOptionService } from '../service/product/select-meetoption.service';

interface IMeetOption {
  id: number;
  name: string;
  price: number;
  amountOption: number;
  isChecked: boolean;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  order: OrderProduct[] = [];
  valorTotal = 0;
  allProducts: Product[] = [];
  observation = [];
  meetOption: MeetOptions[] = [];
  isBebida: boolean;

  constructor(
    private meetOptionSvc: SelectOptionService,
    public router: Router
  ) { }

  ngOnInit() {
    this.allProducts = JSON.parse(localStorage.getItem('lst'));
    const primeiroProduto = this.allProducts[0];

    if (primeiroProduto.type === 'marmita') {
      this.getOptions();
      this.isBebida = true;
    }
  }

  ionViewWillEnter() {
    this.valorTotal = +localStorage.getItem('valorTotal');

    if (this.isBebida) {
      this.allProducts.forEach(marmita => {
        this.meetOption.forEach(opt => {
          marmita.meet_options.push({
            id: opt.id,
            name: opt.name,
            price: opt.price,
            amountOption: 0,
            isChecked: false,
          });
        });
        marmita.amount = 1;
      });
    } else {
      this.allProducts.forEach(bebida => bebida.amount = 1);
    }

  }

  getOptions() {
    this.meetOptionSvc.getOptions().subscribe(result => {
      this.meetOption = result;
    });
  }

  addItem(product: Product) {
    product.amount++;
    this.valorTotal += product.price;
  }

  removeItem(product: Product) {
    if (product.amount > 1) {
      product.amount--;
      this.valorTotal -= product.price;
    }
  }

  checkedOption(option: IMeetOption): void {
    if (!option.isChecked) {
      this.valorTotal += option.price;
      option.amountOption = 1;
    } else {
      this.valorTotal -= (option.price * option.amountOption);
      option.amountOption = 0;
    }
  }

  sumAmountOption(option: IMeetOption): void {
    if (option.isChecked === true) {
      this.valorTotal += option.price;
      option.amountOption += 1;
    }
  }

  subtAmountOption(option: IMeetOption): void {
    if (option.amountOption > 1) {
      this.valorTotal -= option.price;
      option.amountOption -= 1;
    }
  }

  goToCartFinal() {
    const carrinhoCheio = JSON.parse(localStorage.getItem('lstAllProducts'));
    const orderProduct: OrderProduct[] = [];

    this.allProducts.forEach(product => {
      if (product.type === 'marmita') {

        let totalOption = 0;
        let montaString = '';
        product.meet_options.forEach(opt => {
          if (opt.isChecked === true) {
            if (montaString === '') {
              montaString = `${opt.amountOption} ${opt.name}`;
            } else {
              montaString += `, ${opt.amountOption} ${opt.name}`;
            }
            totalOption += opt.amountOption * opt.price;
          }
        });

        orderProduct.push({
          amount: product.amount,
          observation: product.observation,
          meet_options: montaString !== '' ? montaString : '',
          total_item: totalOption + product.price * product.amount,
          order: null,
          product: product.id,
        });

      } else {
        orderProduct.push({
          amount: product.amount,
          total_item: product.price * product.amount,
          order: null,
          product: product.id
        });
      }
    });

    if (!carrinhoCheio) {
      localStorage.setItem('lstAllProducts', JSON.stringify({
        client_name: null,
        phone: null,
        cep: null,
        address_street: null,
        address_number: null,
        address_neighborhood: null,
        address_city: null,
        cost_freight: null,
        status: null,
        payment: null,
        withdrawal: null,
        reference_point: null,
        change_of_money: null,
        total: null,
        products: orderProduct,
      }));
    }

    localStorage.valorTotal = this.valorTotal;
    localStorage.setItem('lst', JSON.stringify(this.allProducts));
    console.log('chegou');
    this.router.navigateByUrl('/cart-final');
  }
}
