"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const customer_module_1 = require("./customer/customer.module");
const order_module_1 = require("./order/order.module");
const product_module_1 = require("./product/product.module");
const path_1 = require("path");
const apollo_1 = require("@nestjs/apollo");
const order_product_module_1 = require("./order-product/order-product.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "postgres",
                database: "postgres",
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
                synchronize: true,
                logging: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), "src/schema.gql"),
            }),
            order_module_1.OrderModule,
            customer_module_1.CustomerModule,
            product_module_1.ProductModule,
            order_product_module_1.OrderProductModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map