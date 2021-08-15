import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
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

    console.log(this.lst2);

    this.lst2.forEach((p) =>{
      this.productsFinal.push(p);
    });

    localStorage.setItem('lst', JSON.stringify(this.productsFinal));
  }

  remove(p, i){
    this.productsFinal.splice(i, i+1);
    this.valorTotal -= p.total_item;
  }

  goToConfirm(){
    localStorage.valorTotal = this.valorTotal;
    if(this.valorTotal !== 0){
      this.router.navigateByUrl('/cart-confirm');
    }else{
      console.log('error');
    }
  }

}
