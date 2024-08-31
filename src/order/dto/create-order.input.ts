// src/order/dto/create-order.input.ts

import { IsDate, IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderDto {
  @Field()
  @IsDate()
  order_date: Date;

  @Field()
  @IsString()
  @IsNotEmpty()
  status: string;

  @Field()
  @IsNotEmpty()
  customer_id: number; // Assuming customer_id is provided
}
