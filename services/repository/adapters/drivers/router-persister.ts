import { ForPersistingProduct, ForPersistingUser, User } from "../../ports/drivers/for-persisting";
import { User as PersistedUser, Product as PersistedProduct, Repository } from "../../app";
import { Product } from "../../../api/app/schemas";

export class RouterPersister implements ForPersistingUser, ForPersistingProduct {
    constructor() {}

    getUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(new Repository().getUser(email));
    }

    getUsers(): Promise<PersistedUser[] | []> {
        return Promise.resolve(new Repository().getUsers());
    }

    createUser(user: User): Promise<PersistedUser | null> {
        return Promise.resolve(new Repository().createUser(user));
    }

    updateUser(email: string, user: User): Promise<PersistedUser | null> {
        return Promise.resolve(new Repository().updateUser(email, user));
    }

    deleteUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(new Repository().deleteUser(email));
    }

    getProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(new Repository().getProduct(id));
    }

    getProducts(): Promise<PersistedProduct[] | []> {
        return Promise.resolve(new Repository().getProducts());
    }

    createProduct(product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(new Repository().createProduct(product));
    }

    updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(new Repository().updateProduct(id, product));
    }

    deleteProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(new Repository().deleteProduct(id));
    }
}