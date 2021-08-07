export class MeetOptions {
    id: number;
    name: string;
    price: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    amount?: number = 0;
    isChecked?: boolean = false;
}
