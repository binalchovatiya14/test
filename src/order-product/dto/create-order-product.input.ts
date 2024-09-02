// src/dto/create-order-product.input.ts
import { IsNumber } from "class-validator";

export class CreateOrderProductInput {
  product_id: number; // This can be a relation field in the GraphQL schema
  order_id: number; // This can be a relation field in the GraphQL schema
  @IsNumber()
  quantity: number;
}
