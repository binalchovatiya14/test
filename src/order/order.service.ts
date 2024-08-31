// src/order/order.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.input';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.ordersRepository.create(createOrderDto);
    return this.ordersRepository.save(order);
  }
  async update(
    order_id: number,
    updateOrderDto: Partial<CreateOrderDto>,
  ): Promise<Order> {
    await this.ordersRepository.update(order_id, updateOrderDto);
    return this.ordersRepository.findOne({ where: { order_id } });
  }

  async delete(
    order_id: number,
  ): Promise<{ success: boolean; message: string }> {
    await this.ordersRepository.delete(order_id);
    return { success: true, message: 'Order deleted successfully' };
  }
  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }
}
