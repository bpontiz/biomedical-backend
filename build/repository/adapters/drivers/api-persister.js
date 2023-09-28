"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPersister = void 0;
const app_1 = require("../../app");
class ApiPersister {
    constructor() { }
    getUser(_email) {
        return Promise.resolve(app_1.persistedUserMock);
    }
    getUsers() {
        return Promise.resolve(app_1.persistedUsersMock);
    }
    createUser(_user) {
        return Promise.resolve(app_1.persistedUserMock);
    }
    updateUser(_email, _user) {
        return Promise.resolve(app_1.persistedUserMock);
    }
    deleteUser(_email) {
        return Promise.resolve(app_1.persistedUserMock);
    }
}
exports.ApiPersister = ApiPersister;
