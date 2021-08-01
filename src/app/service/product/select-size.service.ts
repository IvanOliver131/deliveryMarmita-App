import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})

export class SelectSizeService {
    baseURL = `${apiUrl}/products/perSize/teste`;

    constructor(private http: HttpClient) { }

    getAllSize(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseURL}`);
    }

}
