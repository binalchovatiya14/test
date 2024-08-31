import { Repository } from 'typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.input';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    update(customer_id: number, updateCustomerDto: CreateCustomerDto): Promise<Customer>;
    delete(customer_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): Promise<Customer[]>;
}
