import { CreateOrderProductInput } from './dto/create-order-product.input';
import { UpdateOrderProductInput } from './dto/update-order-product.input';
export declare class OrderProductService {
    create(createOrderProductInput: CreateOrderProductInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderProductInput: UpdateOrderProductInput): string;
    remove(id: number): string;
}
