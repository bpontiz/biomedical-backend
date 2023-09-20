import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    email: string;

    @Column()
    password: string;
}