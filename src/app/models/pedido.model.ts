import { Products } from './products.model';

export class Pedido {
    clientName: string;
	phone: number;
	cep: number;
	addressStreet: string;
	addressNumber: number;
	addressNeighborhood: string;
	addressCity: string;
	costFreigth: number;
	status: string;
	payment: string;
	withdraw: string;
	referencePoint: string;
	changeOfMoney: number;
	total: number;
	products: Products[];

}
