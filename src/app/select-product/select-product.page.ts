import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product.model';
import { Products } from '../models/products.model';
import { SelectProductService } from '../service/product/select-product.service';
import transformProductImageUrl from '../utils/transformImageUrl';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.page.html',
  styleUrls: ['./select-product.page.scss'],
})
export class SelectProductPage implements OnInit {
  productLst: Product[];
  products: Products;
  routeFlag = '';
  typeFlag = '';
  valorTotal = 0;
  checkFood: boolean[] = [];

  constructor(
    private selectProductSvc: SelectProductService,
    public router: Router,
    public actRoute: ActivatedRoute,
  ) {
    this.products = new Products();
    this.products.productsLst = new Array<Product>();
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.routeFlag = this.actRoute.snapshot.paramMap.get('sizeid');
    this.typeFlag = this.actRoute.snapshot.paramMap.get('product-sel');

    this.getAllProducts(this.routeFlag, this.typeFlag);

    this.valorTotal = 0;
  }

  transformImageUrl(imageUrl: string): string {
    return transformProductImageUrl(imageUrl);
  }


  getAllProducts(size, type) {
    if (type === 'marmita') {
      this.selectProductSvc.getAllProductsMarmita(size).subscribe(
        result => {
          this.productLst = result;
        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos');
        });
    }
    else if (type === 'bebidas') {
      this.selectProductSvc.getAllProductsBebida().subscribe(
        result => {
          this.productLst = result;
        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos');
        });
    }
  }

  getAddToCart(valor, i) {
    if (this.checkFood[i] === undefined) {
      this.checkFood[i] = false;
    }

    if (this.checkFood[i] === false) {
      this.valorTotal += valor;
    }
    else {
      this.valorTotal -= valor;
    }

    localStorage.valorTotal = this.valorTotal;
  }

  goToCart() {
    for (let i = 0; i < this.productLst.length; i++) {
      if (this.checkFood[i] === true) {
        this.products.productsLst[i] = this.productLst[i];
      }
    }
    localStorage.setItem('lst', JSON.stringify(this.products.productsLst));
  }

}
