// src/product/product.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { OrderProduct } from '../../order-product/entities/order-product.entity';

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  product_id: number;

  @Field()
  @Column({ type: 'varchar' })
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('decimal')
  price: number;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProducts: OrderProduct[];
}
