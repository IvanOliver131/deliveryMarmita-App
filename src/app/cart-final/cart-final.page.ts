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
  lst2 = [];
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
    this.lst2 = JSON.parse(localStorage.getItem('lst'));
    this.valorTotal += JSON.parse(localStorage.getItem('valorTotal'));

    this.lst2.forEach((p) =>{
      this.productsFinal.push(p);
    });

    this.productsFinal.forEach(p =>{
      p.price = p.price*p.amount;
    });

    console.log(this.productsFinal);
  }

  remove(p, i){
    this.productsFinal.splice(i, i+1);
    this.valorTotal -= p.price;
  }

  goToConfirm(){
    localStorage.valorTotal = this.valorTotal;
    this.router.navigateByUrl('/cart-confirm');
  }

}
