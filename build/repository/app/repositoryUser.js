"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryUser = void 0;
const config_1 = require("./config");
class RepositoryUser {
    constructor() { }
    async getUser(email) {
        try {
            return await config_1.UserDb.findOneBy({ email: email });
        }
        catch {
            console.log(`Could not find user with email: ${email}.`);
            return null;
        }
    }
    ;
    async getUsers() {
        try {
            return await config_1.UserDb.find();
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
                return await config_1.UserDb.save(user);
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
                const newUser = { ...userExistance, user };
                return await config_1.UserDb.save(newUser);
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
            const userExistance = await this.getUser(email);
            if (userExistance) {
                return await config_1.UserDb.remove(userExistance);
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
}
exports.RepositoryUser = RepositoryUser;
;
