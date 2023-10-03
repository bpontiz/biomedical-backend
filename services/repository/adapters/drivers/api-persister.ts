import { ForPersistingUser, User } from "../../ports/drivers/for-persisting-user";
import { User as PersistedUser, RepositoryUser } from "../../app";

export class ApiPersister implements ForPersistingUser {
    constructor() {}

    getUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(new RepositoryUser().getUser(email));
    }

    getUsers(): Promise<PersistedUser[] | []> {
        return Promise.resolve(new RepositoryUser().getUsers());
    }

    createUser(user: User): Promise<PersistedUser | null> {
        return Promise.resolve(new RepositoryUser().createUser(user));
    }

    updateUser(email: string, user: User): Promise<PersistedUser | null> {
        return Promise.resolve(new RepositoryUser().updateUser(email, user));
    }

    deleteUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(new RepositoryUser().deleteUser(email));
    }
}