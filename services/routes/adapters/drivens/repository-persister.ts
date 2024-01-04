import { User } from "../../../repository/app/schemas/user";
import { Product } from "../../app/schema/product";
import { ForRepositoryPersisting } from "../../ports/drivens/for-repository-persisting";
import { Router } from "../../app/router";

export class RepositoryPersister implements ForRepositoryPersisting {
    constructor() {}

    getProducts(): Promise<Product[] | null> {
        return Promise.resolve(new Router().getProducts());
    };

    getProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new Router().getProduct(id));
    };

    createProduct(product: Product): Promise<Product | null> {
        return Promise.resolve(new Router().createProduct(product));
    };

    updateProduct(id: number, product: Product): Promise<Product | null> {
        return Promise.resolve(new Router().updateProduct(id, product));
    };

    deleteProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new Router().deleteProduct(id));
    };

    getUsers(): Promise< User[] | null > {
        return Promise.resolve(new Router().getUsers());
    };

    getUser(email: string): Promise<User | null> {
        return Promise.resolve(new Router().getUser(email))
    };

    createUser(user: User): Promise<User | null> {
        return Promise.resolve(new Router().createUser(user))
    };

    updateUser(email: string, user: User): Promise<User | null> {
        return Promise.resolve(new Router().updateUser(email, user))
    };

    deleteUser(email: string): Promise<User | null> {
        return Promise.resolve(new Router().deleteUser(email))
    }
}