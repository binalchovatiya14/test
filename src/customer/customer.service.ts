// src/customer/customer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.input';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async update(
    customer_id: number,
    updateCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    await this.customerRepository.update(customer_id, updateCustomerDto);
    return this.customerRepository.findOne({ where: { customer_id } });
  }

  async delete(
    customer_id: number,
  ): Promise<{ success: boolean; message: string }> {
    await this.customerRepository.delete(customer_id);
    return { success: true, message: 'Customer deleted successfully' };
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }
}
