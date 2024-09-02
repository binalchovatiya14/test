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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductInput = exports.CreateOrderDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("@nestjs/class-transformer");
let CreateOrderDto = class CreateOrderDto {
};
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateOrderDto.prototype, "order_date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "customer_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderProductInput]),
    (0, class_transformer_1.Type)(() => OrderProductInput),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
exports.CreateOrderDto = CreateOrderDto = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderDto);
let OrderProductInput = class OrderProductInput {
};
exports.OrderProductInput = OrderProductInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], OrderProductInput.prototype, "product_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], OrderProductInput.prototype, "quantity", void 0);
exports.OrderProductInput = OrderProductInput = __decorate([
    (0, graphql_1.InputType)(),
    (0, graphql_1.ObjectType)()
], OrderProductInput);
//# sourceMappingURL=create-order.input.js.map