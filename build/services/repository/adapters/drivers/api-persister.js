"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPersister = void 0;
const app_1 = require("../../app");
class ApiPersister {
    constructor() { }
    getUser(email) {
        return Promise.resolve(new app_1.Repository().getUser(email));
    }
    getUsers() {
        return Promise.resolve(new app_1.Repository().getUsers());
    }
    createUser(user) {
        return Promise.resolve(new app_1.Repository().createUser(user));
    }
    updateUser(email, user) {
        return Promise.resolve(new app_1.Repository().updateUser(email, user));
    }
    deleteUser(email) {
        return Promise.resolve(new app_1.Repository().deleteUser(email));
    }
    getProduct(id) {
        return Promise.resolve(new app_1.Repository().getProduct(id));
    }
    getProducts() {
        return Promise.resolve(new app_1.Repository().getProducts());
    }
    createProduct(product) {
        return Promise.resolve(new app_1.Repository().createProduct(product));
    }
    updateProduct(id, product) {
        return Promise.resolve(new app_1.Repository().updateProduct(id, product));
    }
    deleteProduct(id) {
        return Promise.resolve(new app_1.Repository().deleteProduct(id));
    }
}
exports.ApiPersister = ApiPersister;
