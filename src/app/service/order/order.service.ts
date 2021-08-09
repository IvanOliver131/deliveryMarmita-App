import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../../models/order.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    baseURLOrder = `${apiUrl}/orders`;
    baseURLCep = `${apiUrl}/shippings`;

    constructor(private http: HttpClient) { }

    createOrder(order: IOrder): Observable <IOrder>{
      return this.http.post<IOrder>(`${this.baseURLOrder}`, order);
    }

    getCep(){
      return this.http.get(`${this.baseURLCep}`);
    }

}
