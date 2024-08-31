// src/customer/customer.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Mutation(() => Customer)
  async createCustomer(@Args('input') input: CreateCustomerDto) {
    return this.customerService.create(input);
  }

  @Mutation(() => Customer)
  async updateCustomer(
    @Args('customer_id') customer_id: number,
    @Args('input') input: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.update(customer_id, input);
  }

  @Mutation(() => Boolean) // Return type can also be Boolean
  async deleteCustomer(
    @Args('customer_id') customer_id: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.customerService.delete(customer_id);
  }

  @Query(() => [Customer])
  async getCustomers(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
}
