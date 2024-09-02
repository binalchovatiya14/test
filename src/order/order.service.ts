// src/order/order.service.ts

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { CreateOrderDto } from "./dto/create-order.input";
import { Customer } from "src/customer/entities/customer.entity";
import { Product } from "src/product/entities/product.entity";
import { OrderProduct } from "src/order-product/entities/order-product.entity";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>
  ) {}

  // create(createOrderDto: CreateOrderDto): Promise<Order> {
  //   const order = this.ordersRepository.create(createOrderDto);
  //   console.log("oirder", order);
  //   return this.ordersRepository.save(order);
  // }
  async create(createOrderInput: CreateOrderDto): Promise<Order> {
    const customer = await this.customerRepository.findOne({
      where: {
        customer_id: createOrderInput.customer_id,
      },
    });
    const productObj = await this.productRepository.findByIds(
      createOrderInput.products.map((p) => p.product_id)
    );
    const order = this.ordersRepository.create({
      ...createOrderInput,
      customer,
    });
    await this.ordersRepository.save(order);

    const orderProducts = createOrderInput.products.map(
      ({ product_id, quantity }) => {
        const product = productObj.find((p) => p.product_id === product_id);
        const orderProduct = new OrderProduct();
        orderProduct.order = order;
        orderProduct.product = product;
        orderProduct.quantity = quantity;
        return orderProduct;
      }
    );
    await this.orderProductRepository.save(orderProducts);
    return order;
  }

  async update(
    order_id: number,
    updateOrderDto: Partial<CreateOrderDto>
  ): Promise<Order> {
    await this.ordersRepository.update(order_id, updateOrderDto);
    return this.ordersRepository.findOne({ where: { order_id } });
  }

  async delete(
    order_id: number
  ): Promise<{ success: boolean; message: string }> {
    await this.ordersRepository.delete(order_id);
    return { success: true, message: "Order deleted successfully" };
  }
  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({
      relations: ["customer"],
    }); // Include customer relation
  }
}
