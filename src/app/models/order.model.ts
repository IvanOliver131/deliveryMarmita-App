/* eslint-disable @typescript-eslint/naming-convention */
export class IOrder {
  client_name: string;
  phone: string;
  cep: string;
  address_street: string;
  address_number: number;
  address_neighborhood: string;
  address_city: string;
  cost_freight: number;
  status: string;
  payment: string;
  withdrawal: string;
  reference_point: string;
  change_of_money: number;
  total: number;
  products: {
    amount: number;
    observation?: string;
    meet_options?: string;
    total_item: number;
    order: number | null;
    product: number;
  } [];
}
