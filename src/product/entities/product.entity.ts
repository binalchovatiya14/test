// src/product/product.entity.ts

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";
import { Order } from "src/order/entities/order.entity";

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  product_id: number;

  @Field()
  @Column({ type: "varchar" })
  name: string;

  @Field()
  @Column("text")
  description: string;

  @Field()
  @Column("decimal")
  price: number;

  @Field(() => Order)
  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
