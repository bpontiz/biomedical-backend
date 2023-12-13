import {Users} from '../../app/schema/user';
import {Product} from '../../app/schema/product';

export interface ForRepositoryPersisting {
    getAllProducts(): Promise<Product[] | null>;
    getOneProduct(id:number): Promise<Product | null>;
    getAllUsers(): Promise<Users[] | null>;
    getOneUsers(id:number): Promise<Users | null>
} 