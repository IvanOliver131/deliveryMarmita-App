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
    this.lst = JSON.parse(localStorage.getItem('lstAllProducts'));
    this.initPage();
  }

  initPage(){
<<<<<<< HEAD
    this.productsFinal = this.lst;
    this.valorTotal = parseInt(localStorage.getItem('valorTotal'));
=======
    this.productsFinal = JSON.parse(localStorage.getItem('lstAllProducts'));
    this.valorTotal = +localStorage.getItem('valorTotal');
>>>>>>> 7a1c7f352382833249bd97ccf491ed891444f69e
  }

  remove(p, i){
    this.productsFinal.splice(p, i);
    console.log(i);
    console.log(this.productsFinal);
  }

  goToConfirm(){
    this.router.navigateByUrl('/cart-confirm');
  }

}
