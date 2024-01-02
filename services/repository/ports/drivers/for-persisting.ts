import { User as PersistedUser } from '../../app/schemas/user';
import { User as AuthenticatedUser } from '../../../api/app/schemas/user';
import { Product as PersistedProduct } from '../../app/schemas/product';
import { Product } from '../../../api/app/schemas/product';


export type User = Pick<AuthenticatedUser, 'name' | 'email' | 'password'>;

export interface ForPersistingUser {
    getUser(email: string): Promise<PersistedUser | null>;
    getUsers(): Promise<PersistedUser[] | []>;
    createUser(user: User): Promise<PersistedUser | null>;
    updateUser(email: string, user: User): Promise<PersistedUser | null>;
    deleteUser(email: string): Promise<PersistedUser | null>;
}

export interface ForPersistingProduct {
    getProduct(id: number): Promise<PersistedProduct | null>;
    getProducts(): Promise<PersistedProduct[] | []>;
    createProduct(product: Product): Promise<PersistedProduct | null>;
    updateProduct(id: number, product: Product): Promise<PersistedProduct | null>;
    deleteProduct(id: number): Promise<PersistedProduct | null>;
}