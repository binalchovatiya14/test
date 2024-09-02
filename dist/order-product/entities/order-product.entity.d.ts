import { Order } from "../../order/entities/order.entity";
import { Product } from "../../product/entities/product.entity";
export declare class OrderProduct {
    order_product_id: number;
    order: Order;
    product: Product;
    quantity: number;
}
