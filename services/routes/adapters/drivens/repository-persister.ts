import { IRouter } from "express";
import { Product } from "../../app/schema/product";
import { ForRepositoryPersisting } from "../../ports/drivens/for-repository-persisting";

export class RepositoryPersister implements ForRepositoryPersisting {
    constructor() {}

    getAllProducts(): Promise<Product[] | null | IRouter> {
        return Promise.resolve( new Router().getAllProducts());
    };

    getOneProduct(id: number): Promise<Product | null> {
        return Promise.resolve( new Router().getOneProduct(id));
    };
}