"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const config_1 = require("./config");
const user_1 = require("./model/user");
const product_1 = require("./model/product");
const bcrypt_1 = __importDefault(require("bcrypt"));
class Repository {
    constructor() { }
    async getUser(email) {
        try {
            let service = await config_1.connectionConfig;
            const UserDb = await service.getRepository(user_1.UserModel).findOneBy({ email: email });
            if (UserDb) {
                return UserDb;
            }
            else {
                console.log(`Could not find user with email: ${email}`);
                return null;
            }
        }
        catch (err) {
            console.log(`Could not find user with email: ${email}\n${err}.`);
            return null;
        }
    }
    ;
    async getUsers() {
        try {
            let service = await config_1.connectionConfig;
            const UserDb = await service.getRepository(user_1.UserModel).find();
            return UserDb;
        }
        catch (err) {
            console.log(`Could not find users.`, err);
            return [];
        }
    }
    ;
    async createUser(user) {
        try {
            const userExistance = await this.getUser(user.email);
            if (!userExistance) {
                const usersPasswordHashed = {
                    ...user,
                    password: await this.encrypt(user.password)
                };
                let service = await config_1.connectionConfig;
                const UserDb = await service.getRepository(user_1.UserModel).save(usersPasswordHashed);
                return UserDb;
            }
            ;
            console.log(`User email ${user.email} already exists on user database.`);
            return null;
        }
        catch (err) {
            console.log(`Could not save user ${user.email}`, err);
            return null;
        }
    }
    ;
    async updateUser(email, user) {
        try {
            const userExistance = await this.getUser(email);
            if (userExistance) {
                let service = await config_1.connectionConfig;
                const updatedUser = {
                    id: userExistance.id,
                    ...user
                };
                const UserDb = await service.getRepository(user_1.UserModel).save(updatedUser);
                return UserDb;
            }
            ;
            console.log(`User email ${email} does not exist on user database so it cannot be updated.`);
            return null;
        }
        catch (err) {
            console.log(`Could not update user ${email}.`, err);
            return null;
        }
    }
    ;
    async deleteUser(email) {
        try {
            const userToBeDeleted = await this.getUser(email);
            if (userToBeDeleted) {
                let service = await config_1.connectionConfig;
                const UserDb = await service.getRepository(user_1.UserModel).remove(userToBeDeleted);
                return UserDb;
            }
            ;
            console.log(`User email ${email} does not exist on user database so it cannot be deleted.`);
            return null;
        }
        catch (err) {
            console.log(`Could not delete user ${email}.`, err);
            return null;
        }
    }
    ;
    async getProduct(id) {
        try {
            let service = await config_1.connectionConfig;
            const productById = await service.getRepository(product_1.ProductModel).findOneBy({ id: id });
            return productById;
        }
        catch (err) {
            console.log(`Could not find product with id: ${err}.`);
            return null;
        }
    }
    ;
    async getProducts() {
        try {
            let service = await config_1.connectionConfig;
            const ProductDb = await service.getRepository(product_1.ProductModel).find();
            return ProductDb;
        }
        catch (err) {
            console.log(`Could not find products.`, err);
            return [];
        }
    }
    ;
    async createProduct(product) {
        try {
            const generateTimeStamp = this.getTime();
            const productWithTimeStamp = {
                ...product,
                timestamp: generateTimeStamp,
            };
            let service = await config_1.connectionConfig;
            const ProductDb = await service.getRepository(product_1.ProductModel).save(productWithTimeStamp);
            return ProductDb;
        }
        catch (err) {
            console.log(`Could not save product ${product.name}`, err);
            return null;
        }
    }
    ;
    async updateProduct(id, product) {
        try {
            let productExistance;
            let service = await config_1.connectionConfig;
            id ? productExistance = await this.getProduct(id) : productExistance = null;
            if (productExistance) {
                const updatedProduct = {
                    id: productExistance.id,
                    ...product
                };
                const ProductDb = await service.getRepository(product_1.ProductModel).save(updatedProduct);
                return ProductDb;
            }
            ;
            console.log(`Product with id ${id} does not exist on user database so it cannot be updated.`);
            return null;
        }
        catch (err) {
            console.log(`Could not update product with id ${id}.`, err);
            return null;
        }
    }
    ;
    async deleteProduct(id) {
        try {
            const productToBeDeleted = await this.getProduct(id);
            if (productToBeDeleted) {
                let service = await config_1.connectionConfig;
                const ProductDb = await service.getRepository(product_1.ProductModel).remove(productToBeDeleted);
                return ProductDb;
            }
            ;
            console.log(`Product with id ${id} does not exist on user database so it cannot be deleted.`);
            return null;
        }
        catch (err) {
            console.log(`Could not delete product with ${id}.`, err);
            return null;
        }
    }
    ;
    async encrypt(passwordToBeHashed) {
        const saltRounds = 10;
        const hashing = await bcrypt_1.default.hash(passwordToBeHashed, saltRounds);
        return hashing;
    }
    ;
    getTime() {
        const getNow = new Date().toString();
        return getNow;
    }
    ;
}
exports.Repository = Repository;
;
