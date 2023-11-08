import {Product} from '../../app/schema/product';

export interface ForRepositoryPersisting {
    getAllProducts(): Promise<Product[] | null>;
    getOneProduct(id:number): Promise<Product | null>;
} 