export interface Users {
    id: number;
    name: string;
    surname: string;
    rank: string; //For example... Operator || Admin
    email: string;
    age: number;
    isActive: boolean;
    createdAt: Date;
};