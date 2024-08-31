import { OrderProductService } from './order-product.service';
import { CreateOrderProductInput } from './dto/create-order-product.input';
import { UpdateOrderProductInput } from './dto/update-order-product.input';
export declare class OrderProductResolver {
    private readonly orderProductService;
    constructor(orderProductService: OrderProductService);
    createOrderProduct(createOrderProductInput: CreateOrderProductInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateOrderProduct(updateOrderProductInput: UpdateOrderProductInput): string;
    removeOrderProduct(id: number): string;
}
