// src/order/dto/update-order.input.ts

import { IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateOrderDto {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  status?: string; // Optional field for update

  @Field({ nullable: true })
  order_date?: Date; // Optional field for update
}
