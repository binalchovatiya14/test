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
exports.OrderProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_product_service_1 = require("./order-product.service");
const order_product_entity_1 = require("./entities/order-product.entity");
const create_order_product_input_1 = require("./dto/create-order-product.input");
const update_order_product_input_1 = require("./dto/update-order-product.input");
let OrderProductResolver = class OrderProductResolver {
    constructor(orderProductService) {
        this.orderProductService = orderProductService;
    }
    createOrderProduct(createOrderProductInput) {
        return this.orderProductService.create(createOrderProductInput);
    }
    findAll() {
        return this.orderProductService.findAll();
    }
    findOne(id) {
        return this.orderProductService.findOne(id);
    }
    updateOrderProduct(updateOrderProductInput) {
        return this.orderProductService.update(updateOrderProductInput.id, updateOrderProductInput);
    }
    removeOrderProduct(id) {
        return this.orderProductService.remove(id);
    }
};
exports.OrderProductResolver = OrderProductResolver;
__decorate([
    (0, graphql_1.Mutation)(() => order_product_entity_1.OrderProduct),
    __param(0, (0, graphql_1.Args)('createOrderProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_product_input_1.CreateOrderProductInput]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "createOrderProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [order_product_entity_1.OrderProduct], { name: 'orderProduct' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => order_product_entity_1.OrderProduct, { name: 'orderProduct' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_product_entity_1.OrderProduct),
    __param(0, (0, graphql_1.Args)('updateOrderProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_product_input_1.UpdateOrderProductInput]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "updateOrderProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_product_entity_1.OrderProduct),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "removeOrderProduct", null);
exports.OrderProductResolver = OrderProductResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_product_entity_1.OrderProduct),
    __metadata("design:paramtypes", [order_product_service_1.OrderProductService])
], OrderProductResolver);
//# sourceMappingURL=order-product.resolver.js.map