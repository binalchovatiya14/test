import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.input';
export declare class OrderService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    update(order_id: number, updateOrderDto: Partial<CreateOrderDto>): Promise<Order>;
    delete(order_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): Promise<Order[]>;
}
