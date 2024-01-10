import { User } from "../../../repository/app/schemas/user";
import { Product } from "../../../repository/app/schemas/product";
import { ForRepositoryPersisting, NonPersistedProduct, NonPersistedUser } from "../../ports/drivens/for-repository-persisting";
import { ApiPersister } from "../../../repository/adapters/drivers";

export class RepositoryPersister implements ForRepositoryPersisting {
    constructor() {}

    getProducts(): Promise<Product[] | []> {
        return Promise.resolve(new ApiPersister().getProducts());
    };

    getProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new ApiPersister().getProduct(id));
    };

    createProduct(product: NonPersistedProduct): Promise<Product | null> {
        return Promise.resolve(new ApiPersister().createProduct(product));
    };

    updateProduct(id: number, product: Product): Promise<Product | null> {
        return Promise.resolve(new ApiPersister().updateProduct(id, product));
    };

    deleteProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new ApiPersister().deleteProduct(id));
    };

    getUsers(): Promise< User[] | [] > {
        return Promise.resolve(new ApiPersister().getUsers());
    };

    getUser(email: string): Promise<User | null> {
        return Promise.resolve(new ApiPersister().getUser(email))
    };

    createUser(user: NonPersistedUser): Promise<User | null> {
        return Promise.resolve(new ApiPersister().createUser(user))
    };

    updateUser(email: string, user: User): Promise<User | null> {
        return Promise.resolve(new ApiPersister().updateUser(email, user))
    };

    deleteUser(email: string): Promise<User | null> {
        return Promise.resolve(new ApiPersister().deleteUser(email))
    }
}