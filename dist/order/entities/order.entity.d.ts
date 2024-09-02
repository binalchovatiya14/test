import { Customer } from "../../customer/entities/customer.entity";
import { Product } from "src/product/entities/product.entity";
export declare class Order {
    order_id: number;
    order_date: Date;
    status: string;
    customer: Customer;
    products: Product[];
}
