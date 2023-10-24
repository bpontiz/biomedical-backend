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
            return UserDb;
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
            console.log(`User ${user.email} already exists on user database.`);
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
            console.log(`User ${email} does not exist on user database so it cannot be updated.`);
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
            console.log(`User ${email} does not exist on user database so it cannot be deleted.`);
            return null;
        }
        catch (err) {
            console.log(`Could not delete user ${email}.`, err);
            return null;
        }
    }
    ;
    async getProduct(name, id) {
        try {
            let service = await config_1.connectionConfig;
            const ProductDb = await service.getRepository(product_1.ProductModel).findOneBy({ name: name, id: id });
            return ProductDb;
        }
        catch (err) {
            console.log(`Could not find product with name: ${name}\n${err}.`);
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
            let service = await config_1.connectionConfig;
            const ProductDb = await service.getRepository(product_1.ProductModel).save(product);
            return ProductDb;
        }
        catch (err) {
            console.log(`Could not save product ${product.name}`, err);
            return null;
        }
    }
    ;
    async updateProduct(name, id, product) {
        try {
            let productExistance;
            id ? productExistance = await this.getProduct(name, id) : productExistance = null;
            if (productExistance) {
                let service = await config_1.connectionConfig;
                const updatedProduct = {
                    id: productExistance.id,
                    ...product
                };
                const ProductDb = await service.getRepository(product_1.ProductModel).save(updatedProduct);
                return ProductDb;
            }
            ;
            console.log(`Product ${name} does not exist on user database so it cannot be updated.`);
            return null;
        }
        catch (err) {
            console.log(`Could not update product ${name}.`, err);
            return null;
        }
    }
    ;
    async deleteProduct(name, id) {
        try {
            const productToBeDeleted = await this.getProduct(name, id);
            if (productToBeDeleted) {
                let service = await config_1.connectionConfig;
                const ProductDb = await service.getRepository(product_1.ProductModel).remove(productToBeDeleted);
                return ProductDb;
            }
            ;
            console.log(`Product ${name} does not exist on user database so it cannot be deleted.`);
            return null;
        }
        catch (err) {
            console.log(`Could not delete product ${name}.`, err);
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
}
exports.Repository = Repository;
;
