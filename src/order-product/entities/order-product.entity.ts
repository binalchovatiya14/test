// src/order-product/order-product.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Order } from "../../order/entities/order.entity";
import { Product } from "../../product/entities/product.entity";
import { Field } from "@nestjs/graphql";

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  order_product_id: number;

  @Field(() => Order)
  @ManyToOne(() => Order, (order) => order.products)
  order: Order;

  @Field(() => Product)
  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;

  @Column()
  quantity: number;
}
