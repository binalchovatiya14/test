// src/app.module.ts

import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerModule } from "./customer/customer.module";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { OrderProductModule } from "./order-product/order-product.module";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres", // replace with your PostgreSQL username
      password: "postgres", // replace with your PostgreSQL password
      database: "postgres", // replace with your PostgreSQL database name
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    OrderModule,
    CustomerModule,
    ProductModule,
    OrderProductModule,
  ],
})
export class AppModule {}
