import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-final',
  templateUrl: './cart-final.page.html',
  styleUrls: ['./cart-final.page.scss'],
})
export class CartFinalPage implements OnInit {
  productsFinal = [];
  lst = [];
  valorTotal = 0;

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.lst = JSON.parse(localStorage.getItem('lstAllProducts'));
    this.initPage();
  }

  initPage(){
    this.productsFinal = JSON.parse(localStorage.getItem('lstAllProducts'));
    this.valorTotal = parseInt(localStorage.getItem('valorTotal'));
  }

  remove(p, i){
    this.productsFinal.splice(p, i);
    console.log(i);
    console.log(this.productsFinal);
  }

  goToConfirm(){

  }

}
