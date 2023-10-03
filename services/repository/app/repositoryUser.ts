import { ApiPersister } from "../adapters/drivers";
import { User } from "../ports/drivers/for-persisting-user";
import { connectionConfig } from "./config";
import { User as PersistedUser } from "./schemas/user/user";
import { UserModel } from "./model/user/user";

export class RepositoryUser implements ApiPersister {
    constructor() {}
    async getUser(email: string): Promise<PersistedUser | null> {
        try {
            let service = await connectionConfig;
            const UserDb = await service.getRepository(UserModel).findOneBy({email: email});

            return UserDb;
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
                let service = await connectionConfig;
                const UserDb = await service.getRepository(UserModel).save(user);

                return UserDb;
            };

            console.log(`User ${user.email} already exists on user database.`);
            
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
                const newUser = {
                    id: userExistance.id,
                    ...user
                };
                const UserDb = await service.getRepository(UserModel).save(newUser);

                return UserDb;
            };

            console.log(`User ${email} does not exist on user database so it cannot be updated.`);

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

            console.log(`User ${email} does not exist on user database so it cannot be deleted.`);

            return null;
        }
        catch (err) {
            console.log(`Could not delete user ${email}.`, err);

            return null;
        }
    };
};