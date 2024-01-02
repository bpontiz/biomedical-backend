import { Users } from "../../app/schema/user";
import { Product } from "../../app/schema/product";
import { ForRepositoryPersisting } from "../../ports/drivens/for-repository-persisting";

export class RepositoryPersister implements ForRepositoryPersisting {
    constructor() {}

    getAllProducts(): Promise<Product[] | null> {
        return Promise.resolve(this.Router().getAllProducts());
    };

    getOneProduct(id: number): Promise<Product | null> {
        return Promise.resolve(this.Router().getOneProduct(id));
    };

    getAllUsers(): Promise< Users[] | null > {
        return Promise.resolve(this.Router().getAllUsers());
    };

    getOneUsers(id: number): Promise< Users | null > {
        return Promise.resolve(this.Router().getOneUsers(id))
    }
}