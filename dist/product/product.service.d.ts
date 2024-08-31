import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.input';
export declare class ProductService {
    private productsRepository;
    constructor(productsRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(product_id: number, UpdateProductInput: CreateProductDto): Promise<Product>;
    delete(product_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): Promise<Product[]>;
}
