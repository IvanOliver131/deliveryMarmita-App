export class Product {
    id: number;
    name: string;
    price: number;
    type: string;
    size: string;
    description: string;
    status: boolean;
    image: string;
    amount: number;
    isChecked?: boolean = false;
    meet_options?: {
      id: number;
      name: string;
      price: number;
      amountOption: number;
    }[];
}
