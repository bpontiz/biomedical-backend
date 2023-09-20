import { ForPersistingUser, User } from "../../ports/drivers/for-persisting-user";
import { User as PersistedUser, persistedUserMock, persistedUsersMock } from "../../app";
import { Database } from "../../app";

export class ApiPersister implements ForPersistingUser {
    constructor() {}

    getUser(_email: string, _dbType: Database): Promise<PersistedUser> {
        return Promise.resolve(persistedUserMock)
    }

    getUsers(_users: User[], _dbType: Database): Promise<PersistedUser[]> {
        return Promise.resolve(persistedUsersMock)
    }

    createUser(_user: User, _dbType: Database): Promise<PersistedUser> {
        return Promise.resolve(persistedUserMock)
    }

    updateUser(_email: string, _dbType: Database): Promise<PersistedUser> {
        return Promise.resolve(persistedUserMock)
    }

    deleteUser(_email: string, _dbType: Database): Promise<PersistedUser> {
        return Promise.resolve(persistedUserMock)
    }
}