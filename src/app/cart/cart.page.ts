import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Products } from '../models/products.model';
import { SelectOptionService } from '../service/product/select-meetoption.service';
import { MeetOptions } from '../models/meetOptions';
import { Router } from '@angular/router';

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
  optionMeet: boolean[] = [];

  constructor(
    private meetOptionSvc: SelectOptionService,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.valorTotal = parseInt(localStorage.getItem('valorTotal'));
    this.allProducts = JSON.parse(localStorage.getItem('lst'));

    this.zerarAmount();
    this.getOptions();
  }

  getOptions(){
    this.meetOptionSvc.getOptions().subscribe(result =>{
      this.meetOption = result;
    });
  }
  zerarAmount() {
    this.allProducts.forEach((p) => {
      p.amount = 1;
    });
  }

  addItem(p) {
    if(p.amount === undefined){
      p.amount = 1;
    }else{
      p.amount++;
      this.valorTotal += p.price;
    }
  }

  removeItem(p) {
    if (p.amount === 0 || p.amount === null) {
      console.log('error');
    }
    else {
      p.amount --;
      this.valorTotal -= p.price;
    }
  }

  addOption(valor, i) {
    if (this.optionMeet[i] === undefined) {
      this.optionMeet[i] = false;
    }

    if (this.optionMeet[i] === false) {
      this.valorTotal += valor;
    }
    else {
      this.valorTotal -= valor;
    }

    localStorage.valorTotal = this.valorTotal;
  }

  goToCartFinal() {
    if(this.valorTotal === 0){
      console.log('nao pode ir pra outra pagina');
    }else{
      for(let i=0; i < this.allProducts.length; i++){
        if(this.allProducts[i].amount > 0){
          this.products[i] = this.allProducts[i];
          this.products[i].observation = this.observation[i];
        }
      }
      localStorage.setItem('lstAllProducts', JSON.stringify(this.products));
      this.router.navigateByUrl('/cart-final');
    }
  }
}
