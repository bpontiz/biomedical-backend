import { User } from "../../../repository/app/schemas/user";
import { Product } from "../../../repository/app/schemas/product";
import { ForRepositoryPersisting, NonPersistedProduct, NonPersistedUser } from "../../ports/drivens/for-repository-persisting";
import { RouterPersister } from "../../../repository/adapters/drivers";

export class RepositoryPersister implements ForRepositoryPersisting {
    constructor() {}

    getProducts(): Promise<Product[] | []> {
        return Promise.resolve(new RouterPersister().getProducts());
    };

    getProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new RouterPersister().getProduct(id));
    };

    createProduct(product: NonPersistedProduct): Promise<Product | null> {
        return Promise.resolve(new RouterPersister().createProduct(product));
    };

    updateProduct(id: number, product: Product): Promise<Product | null> {
        return Promise.resolve(new RouterPersister().updateProduct(id, product));
    };

    deleteProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new RouterPersister().deleteProduct(id));
    };

    getUsers(): Promise< User[] | [] > {
        return Promise.resolve(new RouterPersister().getUsers());
    };

    getUser(email: string): Promise<User | null> {
        return Promise.resolve(new RouterPersister().getUser(email))
    };

    createUser(user: NonPersistedUser): Promise<User | null> {
        return Promise.resolve(new RouterPersister().createUser(user))
    };

    updateUser(email: string, user: User): Promise<User | null> {
        return Promise.resolve(new RouterPersister().updateUser(email, user))
    };

    deleteUser(email: string): Promise<User | null> {
        return Promise.resolve(new RouterPersister().deleteUser(email))
    }
}