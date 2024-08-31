// src/product/product.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation(() => Product) // Ensure the return type is Product
  async createProduct(
    @Args('input') input: CreateProductDto,
  ): Promise<Product> {
    return this.productService.create(input);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('product_id') product_id: number,
    @Args('input') input: CreateProductDto,
  ): Promise<Product> {
    return this.productService.update(product_id, input);
  }

  @Mutation(() => Boolean)
  async deleteProduct(
    @Args('product_id') product_id: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.productService.delete(product_id);
  }

  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
