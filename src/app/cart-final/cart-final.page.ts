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
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage(){
    this.lst = JSON.parse(localStorage.getItem('lstAllProducts'));
    this.productsFinal = JSON.parse(localStorage.getItem('lst'));
    this.valorTotal = +localStorage.getItem('valorTotal');

    this.productsFinal.forEach(p =>{
      p.price = p.price*p.amount;
    });
  }

  remove(p, i){
    this.productsFinal.splice(i, i+1);
    console.log(i);
    console.log(p);
    this.valorTotal -= p.price;
  }

  goToConfirm(){
    localStorage.valorTotal = this.valorTotal;
    this.router.navigateByUrl('/cart-confirm');
  }

}
