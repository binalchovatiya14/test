// src/order/order.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.input';

import { UpdateOrderDto } from './dto/update-order.input'; // Import the Update DTO

@Resolver(() => Order)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Mutation(() => Order)
  async createOrder(@Args('input') input: CreateOrderDto): Promise<Order> {
    return this.orderService.create(input);
  }

  @Mutation(() => Order)
  async updateOrder(
    @Args('order_id') order_id: number,
    @Args('input') input: UpdateOrderDto, // Explicitly specify the type here
  ): Promise<Order> {
    return this.orderService.update(order_id, input);
  }

  @Mutation(() => Boolean)
  async deleteOrder(
    @Args('order_id') order_id: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.orderService.delete(order_id);
  }

  @Query(() => [Order])
  async getOrders(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}
