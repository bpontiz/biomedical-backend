import { User as PersistedUser } from '../../app/schemas/user/user';
import { User as AuthenticatedUser } from '../../../api/app/schemas/user/user';
import { Database } from '../../app';


export type User = Pick<AuthenticatedUser, 'name' | 'email' | 'password'>;

export interface ForPersistingUser {
    getUser(email: string, dbType: Database): Promise<PersistedUser>;
    getUsers(users: User[], dbType: Database): Promise<PersistedUser[]>;
    createUser(user: User, dbType: Database): Promise<PersistedUser>;
    updateUser(email: string, dbType: Database): Promise<PersistedUser>;
    deleteUser(email: string, dbType: Database): Promise<PersistedUser>;
}