export declare class CreateOrderDto {
    order_date: Date;
    status: string;
    customer_id: number;
    products: OrderProductInput[];
}
export declare class OrderProductInput {
    product_id: number;
    quantity: number;
}
