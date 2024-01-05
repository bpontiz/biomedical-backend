import { RepositoryPersister } from "../adapters/drivens/repository-persister";
import { Product } from "./schema/product";
import { routes } from "./schema/routes";
import { User } from "../../repository/app/schemas/user";
import { ApiPersister } from "../../repository/adapters/drivers";

export class Router implements RepositoryPersister {
    constructor() {}

    async getProducts(): Promise<Product[] | null> {
        try{
                const getAll = await new ApiPersister().getProducts();
                return getAll
            } catch(error){
                console.log(`Cannot get all products when requiring ${routes.allProducts} path`, error)
                return null;
            }
        
    };

    async getProduct(id: number): Promise<Product | null> {
        try{
                const getOne = await new ApiPersister().getProduct(id);
                return getOne;
            } catch(error){
            console.log(`Cannot get the product whe you require ${routes.oneProduct} path`, error)
            return null;
        }
    };

    async createProduct(product: Product): Promise<Product | null> {
        try{
                const newProduct = await new ApiPersister().createProduct(product);
                return newProduct;
            } catch (error) {
            console.log(`The product cannot be created in the route ${routes.createProduct}`, error);
            return null
        }
    };

    async deleteProduct(id: number): Promise<Product | null> {
        try {
            const deletedProduct = await new ApiPersister().deleteProduct(id);
            return deletedProduct;
        } catch (error) {
            console.log(`The product could not be deleted ${routes.deleteProduct}`, error);
            throw new Error('Product deletion failed');
        }
    };

    async updateProduct(id: number, product: Product): Promise<Product | null> {
        try {
            const updateProduct = await new ApiPersister().updateProduct(id, product);
            return updateProduct;
        } catch (error) {
            console.log(`Unable to update the product on the route ${routes.updateProduct}`, error);
            return null;
        }
    };

    async getUsers(): Promise<User[] | null> {
        try{
                const getAll = await new ApiPersister().getUsers();
                return getAll;
            } catch(error) {
                console.log(`All users could not be found ${routes.allUsers} path`, error)
                return null;
            }
    };

    async getUser(email: string): Promise<User | null> {
        try{
                const getOne = await new ApiPersister().getUser(email);
                return getOne;
            } catch(error) {
            console.log(`One users could not be found ${routes.oneUser}`, error)
            return null
        }
    };

    async createUser(user: User): Promise<User | null>{
        try{
            const createdUser = await new ApiPersister().createUser(user);
            return createdUser;
        } catch (error) {
            console.log(`User could not be created successfully in ${routes.createUser}`, error);
            return null
        }
    }

    async updateUser(email: string, user: User): Promise<User | null> {
        try {
            const updatedUser = await new ApiPersister().updateUser(email, user);
            return updatedUser; 
        }catch (error) {
            console.log(`Could not update user in path ${routes.updateUser}`, error);
            return null;
        }
    };

    async deleteUser(email: string): Promise<User | null> {
        try {
            const deletedUser = await new ApiPersister().deleteUser(email);
            return deletedUser;
        }catch(error) {
            console.log(`The user could not be deleted ${routes.deleteUser}`, error)
            return null
        }
    };
}
