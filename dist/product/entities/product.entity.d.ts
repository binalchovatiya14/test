import { OrderProduct } from '../../order-product/entities/order-product.entity';
export declare class Product {
    product_id: number;
    name: string;
    description: string;
    price: number;
    orderProducts: OrderProduct[];
}
