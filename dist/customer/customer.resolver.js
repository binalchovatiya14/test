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
exports.CustomerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const customer_entity_1 = require("./entities/customer.entity");
const customer_service_1 = require("./customer.service");
const create_customer_input_1 = require("./dto/create-customer.input");
let CustomerResolver = class CustomerResolver {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async createCustomer(input) {
        return this.customerService.create(input);
    }
    async updateCustomer(customer_id, input) {
        return this.customerService.update(customer_id, input);
    }
    async deleteCustomer(customer_id) {
        return this.customerService.delete(customer_id);
    }
    async getCustomers() {
        return this.customerService.findAll();
    }
};
exports.CustomerResolver = CustomerResolver;
__decorate([
    (0, graphql_1.Mutation)(() => customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_input_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "createCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('customer_id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_customer_input_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "updateCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('customer_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "deleteCustomer", null);
__decorate([
    (0, graphql_1.Query)(() => [customer_entity_1.Customer]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "getCustomers", null);
exports.CustomerResolver = CustomerResolver = __decorate([
    (0, graphql_1.Resolver)(() => customer_entity_1.Customer),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerResolver);
//# sourceMappingURL=customer.resolver.js.map