import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.input';
export declare class CustomerResolver {
    private customerService;
    constructor(customerService: CustomerService);
    createCustomer(input: CreateCustomerDto): Promise<Customer>;
    updateCustomer(customer_id: number, input: CreateCustomerDto): Promise<Customer>;
    deleteCustomer(customer_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getCustomers(): Promise<Customer[]>;
}
