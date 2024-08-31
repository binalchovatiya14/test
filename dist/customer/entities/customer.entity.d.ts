import { Order } from '../../order/entities/order.entity';
export declare class Customer {
    customer_id: number;
    address: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    orders: Order[];
}
