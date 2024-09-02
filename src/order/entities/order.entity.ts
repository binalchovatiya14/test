// src/order/order.entity.ts

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";
import { Customer } from "../../customer/entities/customer.entity";
import { OrderProduct } from "../../order-product/entities/order-product.entity";
import { Product } from "src/product/entities/product.entity";

@ObjectType()
@Entity()
export class Order {
  @Field()
  @PrimaryGeneratedColumn()
  order_id: number;

  @Field()
  @Column("timestamp")
  order_date: Date;

  @Field()
  @Column({ type: "varchar" })
  status: string;

  @Field(() => Customer)
  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @Field(() => [Product])
  @ManyToMany(() => Product, (product) => product.orders)
  @JoinTable()
  products: Product[];
}
