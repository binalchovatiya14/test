// src/order/order.entity.ts

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Customer } from '../../customer/entities/customer.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';

@ObjectType()
@Entity()
export class Order {
  @Field()
  @PrimaryGeneratedColumn()
  order_id: number;

  @Field()
  @Column('timestamp')
  order_date: Date;

  @Field()
  @Column({ type: 'varchar' })
  status: string;

  @Field(() => Customer, { nullable: true }) // Make the customer field nullable
  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];
}
