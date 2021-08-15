/* eslint-disable @typescript-eslint/naming-convention */
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
      const iorder = {
        client_name: order.client_name,
        phone: order.phone,
        cep: order.cep? order.cep : '',
        address_street: order.address_city,
        address_number: order.address_number,
        address_neighborhood: order.address_neighborhood,
        address_city: order.address_city,
        cost_freight: order.cost_freight,
        status: order.status,
        payment: order.payment,
        withdrawal: order.withdrawal,
        reference_point: order.reference_point,
        change_of_money: order.change_of_money,
        total: order.total,
        products: order.products
      };
      return this.http.post<IOrder>(`${this.baseURLOrder}`, iorder);
    }

    getCep(){
      return this.http.get(`${this.baseURLCep}`);
    }

}
