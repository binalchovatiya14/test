import { Order } from '../../order/entities/order.entity';
import { Product } from '../../product/entities/product.entity';
export declare class OrderProduct {
    order_product_id: number;
    product: Product;
    order: Order;
    quantity: number;
}
