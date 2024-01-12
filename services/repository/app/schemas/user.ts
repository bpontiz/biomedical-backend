export type Permissions = 'Admin' | 'Moderator' | 'Operator';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    permissions: Permissions;
};