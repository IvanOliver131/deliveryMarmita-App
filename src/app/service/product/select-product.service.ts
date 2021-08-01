import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})

export class SelectProductService {
  baseURLMarmita = `${apiUrl}/products?type=marmita&status=1&size=`;
  baseURLBebida = `${apiUrl}/products?type=bebida&status=1`;

  constructor(private http: HttpClient) { }

  getAllProductsMarmita(size: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURLMarmita}${size}`);
  }

  getAllProductsBebida(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURLBebida}`);
  }

}
