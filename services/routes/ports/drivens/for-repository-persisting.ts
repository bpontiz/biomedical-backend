import { IRouter } from 'express';
import {Product} from '../../app/schema/product';

export interface ForRepositoryPersisting {
    getAllProducts(): Promise<Product[] | null | IRouter>;
    getOneProduct(id:number): Promise<Product | null>;
} 