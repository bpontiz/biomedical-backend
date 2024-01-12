import { RepositoryPersister } from "../adapters/drivens/repository-persister";
import { Product } from "../../repository/app/schemas/product";
import { userRoutes } from './routes-User';
import { productRoutes } from './routes-Product';
import { User } from "../../repository/app/schemas/user";
import { NonPersistedProduct, NonPersistedUser } from "../ports/drivens/for-repository-persisting";
//import { Request, Response } from "express";

export class Router implements RepositoryPersister {
    constructor() {}

    readonly allUsers = '/users';
    private readonly productRoutes = productRoutes;
    private readonly userRoutes = userRoutes;

    async getProducts(): Promise<Product[] | []> {
        try{
                const getAll = await new RepositoryPersister().getProducts();
                return getAll
            } catch(error){
                console.log(`Cannot get all products when requiring ${this.productRoutes.all.path} path`, error)
                return [];
            }
        
    };

    async getProduct(id: number): Promise<Product | null> {
        try{
                const getOne = await new RepositoryPersister().getProduct(id);
                return getOne;
            } catch(error){
            console.log(`Cannot get the product whe you require ${this.productRoutes.one.path} path`, error)
            return null;
        }
    };

    async createProduct(product: NonPersistedProduct): Promise<Product | null> {
        try{
                const newProduct = await new RepositoryPersister().createProduct(product);
                return newProduct;
            } catch (error) {
            console.log(`The product cannot be created in the route ${this.productRoutes.create.path}`, error);
            return null
        }
    };

    async deleteProduct(id: number): Promise<Product | null> {
        try {
            const deletedProduct = await new RepositoryPersister().deleteProduct(id);
            return deletedProduct;
        } catch (error) {
            console.log(`The product could not be deleted ${this.productRoutes.delete.path}`, error);
            return null;
        }
    };

    async updateProduct(id: number, product: Product): Promise<Product | null> {
        try {
            const updateProduct = await new RepositoryPersister().updateProduct(id, product);
            return updateProduct;
        } catch (error) {
            console.log(`Unable to update the product on the route ${this.productRoutes.update.path}`, error);
            return null;
        }
    };

    async getUsers(): Promise<User[] | []> {
        try{
                console.log("ENTRO AL CORAZON DE ROUTER HEX")
                const getAll = await new RepositoryPersister().getUsers();
                return getAll;
            } catch(error) {
                console.log(`All users could not be found ${this.userRoutes.all.path} path`, error)
                return [];
            }
    };

    async getUser(email: string): Promise<User | null> {
        try{
                const getOne = await new RepositoryPersister().getUser(email);
                return getOne;
            } catch(error) {
            console.log(`One users could not be found ${this.userRoutes.one.path}`, error)
            return null
        }
    };

    async createUser(user: NonPersistedUser): Promise<User | null>{
        try{
            const createdUser = await new RepositoryPersister().createUser(user);
            return createdUser;
        } catch (error) {
            console.log(`User could not be created successfully in ${this.userRoutes.create.path}`, error);
            return null
        }
    }

    async updateUser(email: string, user: User): Promise<User | null> {
        try {
            const updatedUser = await new RepositoryPersister().updateUser(email, user);
            return updatedUser; 
        }catch (error) {
            console.log(`Could not update user in path ${this.userRoutes.update.path}`, error);
            return null;
        }
    };

    async deleteUser(email: string): Promise<User | null> {
        try {
            const deletedUser = await new RepositoryPersister().deleteUser(email);
            return deletedUser;
        }catch(error) {
            console.log(`The user could not be deleted ${this.userRoutes.delete.path}`, error)
            return null
        }
    };
/*
    async callGetUsers(_req: Request, res: Response): Promise<User[] | []> {
        res.send(await this.getUsers());
        return await this.getUsers();
    }*/
};