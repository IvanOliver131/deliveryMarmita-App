import { Products } from './products.model';

export class Pedido {
    perdido_id: number;
    products: Products[];

    data_pedido: Date;

    total_pedido = 0;

    obs_pedido: string;
    opcao_retirada: string;
    opcao_retirada_id: number;
    mesa_restaurante: string;
    company_payment_id: number;
    company_payment_name: string;
    preciso_troco_para: number;
    quem_retira: string;

}
