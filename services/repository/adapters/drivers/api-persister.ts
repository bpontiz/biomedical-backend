import { ForPersistingUser, User } from "../../ports/drivers/for-persisting-user";
import { User as PersistedUser, persistedUserMock, persistedUsersMock } from "../../app";

export class ApiPersister implements ForPersistingUser {
    constructor() {}

    getUser(_email: string): Promise<PersistedUser | null> {
        return Promise.resolve(persistedUserMock)
    }

    getUsers(): Promise<PersistedUser[] | []> {
        return Promise.resolve(persistedUsersMock)
    }

    createUser(_user: User): Promise<PersistedUser | null> {
        return Promise.resolve(persistedUserMock)
    }

    updateUser(_email: string, _user: User): Promise<PersistedUser | null> {
        return Promise.resolve(persistedUserMock)
    }

    deleteUser(_email: string): Promise<PersistedUser | null> {
        return Promise.resolve(persistedUserMock)
    }
}