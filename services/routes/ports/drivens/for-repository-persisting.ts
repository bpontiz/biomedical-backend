import {Product} from '../../app/schema/product';

export interface ForRepositoryPersisting {
    getAllProducts(): Promise<Product[]>;
    getOneProduct(id:number): Promise<Product>;
} 