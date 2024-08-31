// src/order-product/order-product.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  order_product_id: number;

  @ManyToOne(() => Product, (product) => product.orderProducts)
  product: Product;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  order: Order;

  @Column()
  quantity: number;
}
