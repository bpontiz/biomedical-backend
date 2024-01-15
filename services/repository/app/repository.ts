import { RouterPersister } from "../adapters/drivers";
import { User } from "../ports/drivers/for-persisting";
import { connectionConfig } from "./config";
import { User as PersistedUser } from "./schemas/user";
import { UserModel } from "./model/user";
import { ProductModel } from "./model/product";
import { Product as PersistedProduct } from "./schemas/product";
import { Product } from "../../api/app/schemas";
import bcrypt from 'bcrypt';

export class Repository implements RouterPersister {
    constructor() {}
    async getUser(email: string): Promise<PersistedUser | null> {
        try {
            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).findOneBy({email: email});

            if (UserDb) {
                return UserDb;   
            };
            
            return null;
        }
        catch {
            return null;
        }
    };

    async getUsers(): Promise<PersistedUser[] | []> {
        try {
            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).find();

            return UserDb;
        }
        catch {
            return [];
        }
    };

    async createUser(user: User): Promise<PersistedUser | null> {
        try {
            const userExistance = await this.getUser(user.email);

            if (userExistance) {
                return null;
            };

            const usersPasswordHashed = {
                ...user,
                password: await this.encrypt(user.password) 
            };
            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).save(usersPasswordHashed);

            return UserDb;
        }
        catch {
            return null;
        }
    };

    async updateUser(email: string, user: User): Promise<PersistedUser | null> {
        try {
            const userExistance = await this.getUser(email);

            if (!userExistance) {
                return null;
            };

            const checkPasswords = await bcrypt.compare(user.password, userExistance.password);
            let service = await connectionConfig;

            if (!checkPasswords) {
                
                const encryptPassword = await this.encrypt(user.password);

                const updatedUser = {
                    id: userExistance.id,
                    ...user,
                    password: encryptPassword,
                };
                const UserDb = await service.getRepository(UserModel).save(updatedUser);
    
                return UserDb;
            };
            
            const updatedUser = {
                id: userExistance.id,
                ...user
            };
            const UserDb = await service.getRepository(UserModel).save(updatedUser);

            return UserDb;
        }
        catch {
            return null;
        }
    };

    async deleteUser(email: string): Promise<PersistedUser | null> {
        try {
            const userToBeDeleted = await this.getUser(email);

            if (!userToBeDeleted) {
                return null;
            };

            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).remove(userToBeDeleted);

            return UserDb;
        }
        catch {
            return null;
        }
    };

    async getProduct(id: number): Promise<PersistedProduct | null> {
        try {
            let service = await connectionConfig;
            const productById = await service.getRepository(ProductModel).findOneBy({id: id});

            if (productById) {
                return productById;
            };

            return null;
        }
        catch {
            return null;
        }
    };

    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            let service = await connectionConfig;
            const ProductDb = await service.getRepository(ProductModel).find();

            return ProductDb;
        }
        catch {
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
        catch {
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

            return null;
        }
        catch {
            return null;
        }
    };

    async deleteProduct(id: number): Promise<PersistedProduct | null> {
        try {
            const productToBeDeleted = await this.getProduct(id);

            if (!productToBeDeleted) {
                return null;
            };

            let service = await connectionConfig;
            const ProductDb = await service.getRepository(ProductModel).remove(productToBeDeleted);

            return ProductDb;
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