import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetOptions } from '../models/meetOptions';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { SelectOptionService } from '../service/product/select-meetoption.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  order: Order[] = [];
  valorTotal = 0;
  allProducts: Product[] = [];
  observation = [];
  meetOption: MeetOptions[];
  showOption: boolean;

  constructor(
    private meetOptionSvc: SelectOptionService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.valorTotal = +localStorage.getItem('valorTotal');
    this.allProducts = JSON.parse(localStorage.getItem('lst'));

    this.allProducts.forEach(item => {
      item.meet_options = [];
      item.amount = 1;
    });
    console.log('All Products', this.allProducts);

    const primeiroProduto = this.allProducts[0];
    if (primeiroProduto.type === 'marmita') {
      this.showOption = true;
      this.getOptions();
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


  checkedOption(option: MeetOptions, indexProd: number, indexOpt: number): void {
    if (!option.isChecked) {
      this.valorTotal += option.price;

      this.allProducts[indexProd].meet_options.push({
        id: option.id,
        name: option.name,
        price: option.price,
        amountOption: 1
      });

      this.meetOption[indexOpt].amount = 1;
    } else {
      this.valorTotal -= option.price;

      const index = this.allProducts[indexProd].meet_options.findIndex(item => item.id === option.id);
      this.allProducts[indexProd].meet_options.splice(index, 1);

      this.meetOption[indexOpt].amount -= 1;
    }
    console.log('AllProducts - após checked', this.allProducts);
  }

  sumAmountOption(option: MeetOptions): void {
    console.log(option);
  }

  subtAmountOption(option: MeetOptions): void {
    console.log(option);
  }

  goToCartFinal() {
    // if (this.valorTotal === 0) {
    //   console.log('nao pode ir pra outra pagina');
    // } else {
    //   for (let i = 0; i < this.allProducts.length; i++) {
    //     if (this.allProducts[i].amount > 0) {
    //       this.order[i] = this.allProducts[i];
    //       this.order[i].observation = this.observation[i];
    //     }
    //   }
    //   localStorage.setItem('lstAllProducts', JSON.stringify(this.order));
    //   this.router.navigateByUrl('/cart-final');
    // }
    console.log('Final');
  }
}
