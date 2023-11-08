import { RepositoryPersister } from "../adapters/drivens/repository-persister";
import { Product } from "./schema/product";

export class Router implements RepositoryPersister {
    constructor() {}

    async getAllProducts(): Promise<Product[]> {
        
    }
}