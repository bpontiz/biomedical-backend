import {User} from '../../../repository/app/schemas/user';
import {Product} from '../../app/schema/product';

export interface ForRepositoryPersisting {
    getProducts(): Promise<Product[] | null>;
    getProduct(id:number): Promise<Product | null>;
    createProduct(product: Product): Promise<Product | null>;
    updateProduct(id: number, product: Product): Promise<Product | null>;
    deleteProduct(id: number): Promise<Product | null>
    getUsers(): Promise<User[] | null>;
    getUser(mail: string): Promise<User | null>;
    createUser(user: User): Promise<User | null>;
    updateUser(email: string, user: User): Promise<User | null>;
    deleteUser(email: string): Promise<User | null>;
} 