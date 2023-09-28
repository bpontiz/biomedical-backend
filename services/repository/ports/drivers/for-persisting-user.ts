import { User as PersistedUser } from '../../app/schemas/user/user';
import { User as AuthenticatedUser } from '../../../api/app/schemas/user/user';

export type User = Pick<AuthenticatedUser, 'name' | 'email' | 'password'>;

export interface ForPersistingUser {
    getUser(email: string): Promise<PersistedUser | null>;
    getUsers(): Promise<PersistedUser[] | []>;
    createUser(user: User): Promise<PersistedUser | null>;
    updateUser(email: string, user: User): Promise<PersistedUser | null>;
    deleteUser(email: string): Promise<PersistedUser | null>;
}