// src/customer/customer.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Order } from '../../order/entities/order.entity';

@ObjectType()
@Entity()
export class Customer {
  @Field()
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Field()
  @Column('text')
  address: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Field()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Field()
  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Field(() => [Order]) // Expose the orders field in GraphQL
  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
