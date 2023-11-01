import { ApiPersister } from "../adapters/drivers";
import { User } from "../ports/drivers/for-persisting";
import { connectionConfig } from "./config";
import { User as PersistedUser } from "./schemas/user";
import { UserModel } from "./model/user";
import { ProductModel } from "./model/product";
import { Product as PersistedProduct } from "./schemas/product";
import { Product } from "../../api/app/schemas";
import bcrypt from 'bcrypt';

export class Repository implements ApiPersister {
    constructor() {}
    async getUser(email: string): Promise<PersistedUser | null> {
        try {
            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).findOneBy({email: email});
            if (UserDb)
            {
                return UserDb;   
            }
            else
            {
                console.log(`Could not find user with email: ${email}`);
                return null;
            }
        }
        catch (err) {
            console.log(`Could not find user with email: ${email}\n${err}.`);

            return null;
        }
    };

    async getUsers(): Promise<PersistedUser[] | []> {
        try {
            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).find();

            return UserDb;
        }
        catch (err) {
            console.log(`Could not find users.`, err);

            return [];
        }
    };

    async createUser(user: User): Promise<PersistedUser | null> {
        try {
            const userExistance = await this.getUser(user.email);
            if (!userExistance) {
                const usersPasswordHashed = {
                    ...user,
                    password: await this.encrypt(user.password)
                };
                let service = await connectionConfig;
                const UserDb = await service.getRepository(UserModel).save(usersPasswordHashed);

                return UserDb;
            };

            console.log(`User email ${user.email} already exists on user database.`);
            
            return null;
        }
        catch (err) {
            console.log(`Could not save user ${user.email}`, err);

            return null;
        }
    };

    async updateUser(email: string, user: User): Promise<PersistedUser | null> {
        try {
            const userExistance = await this.getUser(email);
            if (userExistance) {
                let service = await connectionConfig;
                const updatedUser = {
                    id: userExistance.id,
                    ...user
                };
                const UserDb = await service.getRepository(UserModel).save(updatedUser);

                return UserDb;
            };

            console.log(`User email ${email} does not exist on user database so it cannot be updated.`);

            return null;
        }
        catch (err) {
            console.log(`Could not update user ${email}.`, err);

            return null;
        }
    };

    async deleteUser(email: string): Promise<PersistedUser | null> {
        try {
            const userToBeDeleted = await this.getUser(email);
            if (userToBeDeleted) {
                let service = await connectionConfig;
                const UserDb = await service.getRepository(UserModel).remove(userToBeDeleted);

                return UserDb;
            };

            console.log(`User email ${email} does not exist on user database so it cannot be deleted.`);

            return null;
        }
        catch (err) {
            console.log(`Could not delete user ${email}.`, err);

            return null;
        }
    };

    async getProduct(id: number): Promise<PersistedProduct | null> {
        try {
            let service = await connectionConfig;
            const productById = await service.getRepository(ProductModel).findOneBy({id: id});

            return productById;
        }
        catch (err) {
            console.log(`Could not find product with id: ${err}.`);

            return null;
        }
    };

    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            let service = await connectionConfig;
            const ProductDb = await service.getRepository(ProductModel).find();

            return ProductDb;
        }
        catch (err) {
            console.log(`Could not find products.`, err);

            return [];
        }
    };

    async createProduct(product: Product): Promise<PersistedProduct | null> {
        try {
            const generateTimeStamp = this.getTime();
            const productWithTimeStamp = {
                ...product,
                timestamp: generateTimeStamp,
            };
            let service = await connectionConfig;
            const ProductDb = await service.getRepository(ProductModel).save(productWithTimeStamp);

            return ProductDb;
        }
        catch (err) {
            console.log(`Could not save product ${product.name}`, err);

            return null;
        }
    };

    async updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        try {
            let productExistance;
            let service = await connectionConfig;
            id ? productExistance = await this.getProduct(id) : productExistance = null;
            if (productExistance) {
                const updatedProduct = {
                    id: productExistance.id,
                    ...product
                };
                const ProductDb = await service.getRepository(ProductModel).save(updatedProduct);

                return ProductDb;
            };
            console.log(`Product with id ${id} does not exist on user database so it cannot be updated.`);

            return null;
        }
        catch (err) {
            console.log(`Could not update product with id ${id}.`, err);

            return null;
        }
    };

    async deleteProduct(id: number): Promise<PersistedProduct | null> {
        try {
            const productToBeDeleted = await this.getProduct(id);
            if (productToBeDeleted) {
                let service = await connectionConfig;
                const ProductDb = await service.getRepository(ProductModel).remove(productToBeDeleted);

                return ProductDb;
            };

            console.log(`Product with id ${id} does not exist on user database so it cannot be deleted.`);

            return null;
        }
        catch (err) {
            console.log(`Could not delete product with ${id}.`, err);

            return null;
        }
    };

    async encrypt(passwordToBeHashed: string): Promise<string> {
        const saltRounds: number = 10;
        const hashing = await bcrypt.hash(passwordToBeHashed, saltRounds);

        return hashing;
    };

    getTime(): string {
        const getNow = new Date().toString();

        return getNow;
    };
};