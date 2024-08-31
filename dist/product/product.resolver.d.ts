import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.input';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    createProduct(input: CreateProductDto): Promise<Product>;
    updateProduct(product_id: number, input: CreateProductDto): Promise<Product>;
    deleteProduct(product_id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getProducts(): Promise<Product[]>;
}
