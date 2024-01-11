import {User} from '../../../repository/app/schemas/user';
import {Product} from '../../../repository/app/schemas/product';

export type NonPersistedUser = Omit<User, 'id'>;
export type NonPersistedProduct = Omit<Product, 'id'>;

export interface ForRepositoryPersisting {
    getProducts(): Promise<Product[] | []>;
    getProduct(id:number): Promise<Product | null>;
    createProduct(product: Product): Promise<NonPersistedProduct | null>;
    updateProduct(id: number, product: Product): Promise<Product | null>;
    deleteProduct(id: number): Promise<Product | null>
    getUsers(): Promise<User[] | []>;
    getUser(mail: string): Promise<User | null>;
    createUser(user: User): Promise<NonPersistedUser | null>;
    updateUser(email: string, user: User): Promise<User | null>;
    deleteUser(email: string): Promise<User | null>;
} 