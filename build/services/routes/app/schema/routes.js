"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = {
    allUsers: `/users`,
    oneUser: `/users/:id`,
    createUser: `/users/:id/:name/:surname/:email/:age`,
    updateUser: `/users/:id/:name/:surname/:email/:age`,
    deleteUser: `/users/:id`,
    allProducts: `/products`,
    oneProduct: `/products/:id`,
    createProduct: `/products/:id`,
    deleteProduct: `/products/:id`,
    updateProduct: `/products/:id/:name/:series/status`,
};
