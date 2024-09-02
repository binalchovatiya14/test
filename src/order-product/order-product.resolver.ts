import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { OrderProductService } from "./order-product.service";
import { OrderProduct } from "./entities/order-product.entity";

@Resolver(() => OrderProduct)
export class OrderProductResolver {
  constructor(private readonly orderProductService: OrderProductService) {}
}
