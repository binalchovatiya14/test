import { Order } from "./entities/order.entity";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.input";
import { UpdateOrderDto } from "./dto/update-order.input";
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    updateOrder(order_id: number, input: UpdateOrderDto): Promise<Order>;
    deleteOrder(order_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getOrders(): Promise<Order[]>;
}
