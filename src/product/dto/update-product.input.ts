// src/product/dto/update-product.input.ts

import { IsString, IsDecimal, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  name?: string; // Optional field for update

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  description?: string; // Optional field for update

  @Field({ nullable: true })
  @IsDecimal()
  price?: number; // Optional field for update
}
