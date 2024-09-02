// src/order/dto/create-order.input.ts

import { InputType, Field, ObjectType } from "@nestjs/graphql";
import { Type } from "@nestjs/class-transformer";
@InputType()
export class CreateOrderDto {
  @Field()
  order_date: Date;

  @Field()
  status: string;

  @Field()
  customer_id: number;

  @Field(() => [OrderProductInput])
  @Type(() => OrderProductInput)
  products: OrderProductInput[];
}

@InputType()
@ObjectType()
export class OrderProductInput {
  @Field()
  product_id: number;

  @Field()
  quantity: number;
}
