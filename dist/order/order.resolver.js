"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("./entities/order.entity");
const order_service_1 = require("./order.service");
const create_order_input_1 = require("./dto/create-order.input");
const update_order_input_1 = require("./dto/update-order.input");
let OrderResolver = class OrderResolver {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createOrder(createOrderDto) {
        try {
            return await this.orderService.create(createOrderDto);
        }
        catch (error) {
            throw new Error(`Failed to create order: ${error.message}`);
        }
    }
    async updateOrder(order_id, input) {
        return this.orderService.update(order_id, input);
    }
    async deleteOrder(order_id) {
        return this.orderService.delete(order_id);
    }
    async getOrders() {
        return this.orderService.findAll();
    }
};
exports.OrderResolver = OrderResolver;
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)("createOrderDto")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)("order_id")),
    __param(1, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_order_input_1.UpdateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("order_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "deleteOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [order_entity_1.Order]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
exports.OrderResolver = OrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_entity_1.Order),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
//# sourceMappingURL=order.resolver.js.map