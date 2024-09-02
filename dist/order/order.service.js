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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const customer_entity_1 = require("../customer/entities/customer.entity");
const product_entity_1 = require("../product/entities/product.entity");
const order_product_entity_1 = require("../order-product/entities/order-product.entity");
let OrderService = class OrderService {
    constructor(ordersRepository, customerRepository, productRepository, orderProductRepository) {
        this.ordersRepository = ordersRepository;
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.orderProductRepository = orderProductRepository;
    }
    async create(createOrderInput) {
        const customer = await this.customerRepository.findOne({
            where: {
                customer_id: createOrderInput.customer_id,
            },
        });
        const productObj = await this.productRepository.findByIds(createOrderInput.products.map((p) => p.product_id));
        const order = this.ordersRepository.create({
            ...createOrderInput,
            customer,
        });
        await this.ordersRepository.save(order);
        const orderProducts = createOrderInput.products.map(({ product_id, quantity }) => {
            const product = productObj.find((p) => p.product_id === product_id);
            const orderProduct = new order_product_entity_1.OrderProduct();
            orderProduct.order = order;
            orderProduct.product = product;
            orderProduct.quantity = quantity;
            return orderProduct;
        });
        await this.orderProductRepository.save(orderProducts);
        return order;
    }
    async update(order_id, updateOrderDto) {
        await this.ordersRepository.update(order_id, updateOrderDto);
        return this.ordersRepository.findOne({ where: { order_id } });
    }
    async delete(order_id) {
        await this.ordersRepository.delete(order_id);
        return { success: true, message: "Order deleted successfully" };
    }
    findAll() {
        return this.ordersRepository.find({
            relations: ["customer"],
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(order_product_entity_1.OrderProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
//# sourceMappingURL=order.service.js.map