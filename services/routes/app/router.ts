import { RepositoryPersister } from "../adapters/drivens/repository-persister";
import { Product } from "../../repository/app/schemas/product";
import { routes } from "./schema/routes";
import { User } from "../../repository/app/schemas/user";
import { NonPersistedProduct, NonPersistedUser } from "../ports/drivens/for-repository-persisting";

export class Router implements RepositoryPersister {
    constructor() {}

    readonly allUsers = '/users';

    async getProducts(): Promise<Product[] | []> {
        try{
                const getAll = await new RepositoryPersister().getProducts();
                return getAll
            } catch(error){
                console.log(`Cannot get all products when requiring ${routes.allProducts} path`, error)
                return [];
            }
        
    };

    async getProduct(id: number): Promise<Product | null> {
        try{
                const getOne = await new RepositoryPersister().getProduct(id);
                return getOne;
            } catch(error){
            console.log(`Cannot get the product whe you require ${routes.oneProduct} path`, error)
            return null;
        }
    };

    async createProduct(product: NonPersistedProduct): Promise<Product | null> {
        try{
                const newProduct = await new RepositoryPersister().createProduct(product);
                return newProduct;
            } catch (error) {
            console.log(`The product cannot be created in the route ${routes.createProduct}`, error);
            return null
        }
    };

    async deleteProduct(id: number): Promise<Product | null> {
        try {
            const deletedProduct = await new RepositoryPersister().deleteProduct(id);
            return deletedProduct;
        } catch (error) {
            console.log(`The product could not be deleted ${routes.deleteProduct}`, error);
            return null;
        }
    };

    async updateProduct(id: number, product: Product): Promise<Product | null> {
        try {
            const updateProduct = await new RepositoryPersister().updateProduct(id, product);
            return updateProduct;
        } catch (error) {
            console.log(`Unable to update the product on the route ${routes.updateProduct}`, error);
            return null;
        }
    };

    async getUsers(): Promise<User[] | []> {
        try{
                const getAll = await new RepositoryPersister().getUsers();
                return getAll;
            } catch(error) {
                console.log(`All users could not be found ${routes.allUsers} path`, error)
                return [];
            }
    };

    async getUser(email: string): Promise<User | null> {
        try{
                const getOne = await new RepositoryPersister().getUser(email);
                return getOne;
            } catch(error) {
            console.log(`One users could not be found ${routes.oneUser}`, error)
            return null
        }
    };

    async createUser(user: NonPersistedUser): Promise<User | null>{
        try{
            const createdUser = await new RepositoryPersister().createUser(user);
            return createdUser;
        } catch (error) {
            console.log(`User could not be created successfully in ${routes.createUser}`, error);
            return null
        }
    }

    async updateUser(email: string, user: User): Promise<User | null> {
        try {
            const updatedUser = await new RepositoryPersister().updateUser(email, user);
            return updatedUser; 
        }catch (error) {
            console.log(`Could not update user in path ${routes.updateUser}`, error);
            return null;
        }
    };

    async deleteUser(email: string): Promise<User | null> {
        try {
            const deletedUser = await new RepositoryPersister().deleteUser(email);
            return deletedUser;
        }catch(error) {
            console.log(`The user could not be deleted ${routes.deleteUser}`, error)
            return null
        }
    };
};