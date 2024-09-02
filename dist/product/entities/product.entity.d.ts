import { Order } from "src/order/entities/order.entity";
export declare class Product {
    product_id: number;
    name: string;
    description: string;
    price: number;
    orders: Order[];
}
