import { Customer } from '../../customer/entities/customer.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';
export declare class Order {
    order_id: number;
    order_date: Date;
    status: string;
    customer: Customer;
    orderProducts: OrderProduct[];
}
