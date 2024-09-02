// src/order/order.module.ts

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { OrderService } from "./order.service";
import { OrderResolver } from "./order.resolver";
import { Customer } from "src/customer/entities/customer.entity";
import { Product } from "src/product/entities/product.entity";
import { OrderProduct } from "src/order-product/entities/order-product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Order, Customer, Product, OrderProduct])],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
