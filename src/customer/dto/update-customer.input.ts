// src/customer/dto/update-customer.input.ts

import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerInput {
  @Field({ nullable: true }) // Nullable if you want to allow partial updates
  @IsString()
  @IsNotEmpty()
  address?: string; // Optional field for update

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  first_name?: string; // Optional field for update

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  last_name?: string; // Optional field for update

  @Field({ nullable: true })
  @IsEmail()
  email?: string; // Optional field for update

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  phone?: string; // Optional field for update
}
