"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const routes_1 = require("./schema/routes");
const drivers_1 = require("../../repository/adapters/drivers");
class Router {
    constructor() { }
    async getProducts() {
        try {
            const getAll = await new drivers_1.ApiPersister().getProducts();
            return getAll;
        }
        catch (error) {
            console.log(`Cannot get all products when requiring ${routes_1.routes.allProducts} path`, error);
            return null;
        }
    }
    ;
    async getProduct(id) {
        try {
            const getOne = await new drivers_1.ApiPersister().getProduct(id);
            return getOne;
        }
        catch (error) {
            console.log(`Cannot get the product whe you require ${routes_1.routes.oneProduct} path`, error);
            return null;
        }
    }
    ;
    async createProduct(product) {
        try {
            const newProduct = await new drivers_1.ApiPersister().createProduct(product);
            return newProduct;
        }
        catch (error) {
            console.log(`The product cannot be created in the route ${routes_1.routes.createProduct}`, error);
            return null;
        }
    }
    ;
    async deleteProduct(id) {
        try {
            const deletedProduct = await new drivers_1.ApiPersister().deleteProduct(id);
            return deletedProduct;
        }
        catch (error) {
            console.log(`The product could not be deleted ${routes_1.routes.deleteProduct}`, error);
            throw new Error('Product deletion failed');
        }
    }
    ;
    async updateProduct(id, product) {
        try {
            const updateProduct = await new drivers_1.ApiPersister().updateProduct(id, product);
            return updateProduct;
        }
        catch (error) {
            console.log(`Unable to update the product on the route ${routes_1.routes.updateProduct}`, error);
            return null;
        }
    }
    ;
    async getUsers() {
        try {
            const getAll = await new drivers_1.ApiPersister().getUsers();
            return getAll;
        }
        catch (error) {
            console.log(`All users could not be found ${routes_1.routes.allUsers} path`, error);
            return null;
        }
    }
    ;
    async getUser(email) {
        try {
            const getOne = await new drivers_1.ApiPersister().getUser(email);
            return getOne;
        }
        catch (error) {
            console.log(`One users could not be found ${routes_1.routes.oneUser}`, error);
            return null;
        }
    }
    ;
    async createUser(user) {
        try {
            const createdUser = await new drivers_1.ApiPersister().createUser(user);
            return createdUser;
        }
        catch (error) {
            console.log(`User could not be created successfully in ${routes_1.routes.createUser}`, error);
            return null;
        }
    }
    async updateUser(email, user) {
        try {
            const updatedUser = await new drivers_1.ApiPersister().updateUser(email, user);
            return updatedUser;
        }
        catch (error) {
            console.log(`Could not update user in path ${routes_1.routes.updateUser}`, error);
            return null;
        }
    }
    ;
    async deleteUser(email) {
        try {
            const deletedUser = await new drivers_1.ApiPersister().deleteUser(email);
            return deletedUser;
        }
        catch (error) {
            console.log(`The user could not be deleted ${routes_1.routes.deleteUser}`, error);
            return null;
        }
    }
    ;
}
exports.Router = Router;
