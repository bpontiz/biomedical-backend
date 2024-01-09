"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryPersister = void 0;
const router_1 = require("../../app/router");
class RepositoryPersister {
    constructor() { }
    getProducts() {
        return Promise.resolve(new router_1.Router().getProducts());
    }
    ;
    getProduct(id) {
        return Promise.resolve(new router_1.Router().getProduct(id));
    }
    ;
    createProduct(product) {
        return Promise.resolve(new router_1.Router().createProduct(product));
    }
    ;
    updateProduct(id, product) {
        return Promise.resolve(new router_1.Router().updateProduct(id, product));
    }
    ;
    deleteProduct(id) {
        return Promise.resolve(new router_1.Router().deleteProduct(id));
    }
    ;
    getUsers() {
        return Promise.resolve(new router_1.Router().getUsers());
    }
    ;
    getUser(email) {
        return Promise.resolve(new router_1.Router().getUser(email));
    }
    ;
    createUser(user) {
        return Promise.resolve(new router_1.Router().createUser(user));
    }
    ;
    updateUser(email, user) {
        return Promise.resolve(new router_1.Router().updateUser(email, user));
    }
    ;
    deleteUser(email) {
        return Promise.resolve(new router_1.Router().deleteUser(email));
    }
}
exports.RepositoryPersister = RepositoryPersister;
