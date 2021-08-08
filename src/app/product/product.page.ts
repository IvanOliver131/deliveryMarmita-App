import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { SelectSizeService } from '../service/product/select-size.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  routeFlag: number;
  productMarmitaSizeLst: Product[];
  productBebidaSizeLst: Product[];

  constructor(
    public router: Router,
    public actRoute: ActivatedRoute,
    public getSizeSvc: SelectSizeService,
  ) { }

  ngOnInit() {
    this.routeFlag = +this.actRoute.snapshot.paramMap.get('pid');
    if (this.routeFlag === 1) {
      this.getMarmitaSize();
    }
  }

  /****************  GET ALL MARMITAS SIZE  ****************/
  getMarmitaSize() {
    this.getSizeSvc.getAllSize().subscribe(result => {
      this.productMarmitaSizeLst = result;
    });
  }

  /******************* ROTAS MARMITAS ******************/
  goToSelectProductMarmita(size: string) {
    this.router.navigateByUrl('select-product/marmita/' + size);
  }

}
