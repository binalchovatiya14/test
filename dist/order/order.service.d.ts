import { Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { CreateOrderDto } from "./dto/create-order.input";
import { Customer } from "src/customer/entities/customer.entity";
import { Product } from "src/product/entities/product.entity";
import { OrderProduct } from "src/order-product/entities/order-product.entity";
export declare class OrderService {
    private ordersRepository;
    private customerRepository;
    private productRepository;
    private orderProductRepository;
    constructor(ordersRepository: Repository<Order>, customerRepository: Repository<Customer>, productRepository: Repository<Product>, orderProductRepository: Repository<OrderProduct>);
    create(createOrderInput: CreateOrderDto): Promise<Order>;
    update(order_id: number, updateOrderDto: Partial<CreateOrderDto>): Promise<Order>;
    delete(order_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): Promise<Order[]>;
}
