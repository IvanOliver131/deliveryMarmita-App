import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetOptions } from '../models/meetOptions';
import { Products } from '../models/products.model';
import { SelectOptionService } from '../service/product/select-meetoption.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products: Products[] = [];
  valorTotal = 0;
  allProducts = [];
  observation = [];
  meetOption: MeetOptions[];
  showOption: boolean;

  constructor(
    private meetOptionSvc: SelectOptionService,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.valorTotal = +localStorage.getItem('valorTotal');
    this.allProducts = JSON.parse(localStorage.getItem('lst'));

    const primeiroProduto = this.allProducts[0];
    if (primeiroProduto.type === 'marmita') {
      this.showOption = true;
      this.getOptions();
    }
    this.zerarAmount();
  }

  getOptions() {
    this.meetOptionSvc.getOptions().subscribe(result => {
      this.meetOption = result;
    });
  }
  zerarAmount() {
    this.allProducts.forEach((p) => {
      p.amount = 1;
    });
  }

  addItem(p) {
    if (p.amount === undefined) {
      p.amount = 1;
    } else {
      p.amount++;
      this.valorTotal += p.price;
    }
  }

  removeItem(p) {
    if (p.amount === 0 || p.amount === null) {
      console.log('error');
    }
    else {
      p.amount--;
      this.valorTotal -= p.price;
    }
  }

  addOption(option: MeetOptions, index: number): void {
    if (!option.isChecked) {
      this.valorTotal += option.price;
      this.meetOption[index].amount = this.meetOption[index].amount ? this.meetOption[index].amount + 1 : 1;
    } else {
      this.valorTotal -= option.price;
      this.meetOption[index].amount = this.meetOption[index].amount ? this.meetOption[index].amount - 1 : 1;
    }
  }

  sumAmountOption(option: MeetOptions): void {
    console.log(option);
  }

  subtAmountOption(option: MeetOptions): void {
    console.log(option);
  }

  goToCartFinal() {
    if (this.valorTotal === 0) {
      console.log('nao pode ir pra outra pagina');
    } else {
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i].amount > 0) {
          this.products[i] = this.allProducts[i];
          this.products[i].observation = this.observation[i];
        }
      }
      localStorage.setItem('lstAllProducts', JSON.stringify(this.products));
      this.router.navigateByUrl('/cart-final');
    }
  }
}
