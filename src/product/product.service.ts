// src/product/product.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  async update(
    product_id: number,
    UpdateProductInput: CreateProductDto,
  ): Promise<Product> {
    await this.productsRepository.update(product_id, UpdateProductInput);
    return this.productsRepository.findOne({ where: { product_id } }); // Correctly using findOne with an options object
  }

  async delete(
    product_id: number,
  ): Promise<{ success: boolean; message: string }> {
    await this.productsRepository.delete(product_id);
    return { success: true, message: 'Product deleted successfully' };
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
}
