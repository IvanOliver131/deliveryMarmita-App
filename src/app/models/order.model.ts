import { Product } from './product.model';

export class Order {
    amount: number;
    observation: string;
    meet_options: string;
    totalItem: number;
    order: number;
    product: number;
    productsLst: Product[];
}
