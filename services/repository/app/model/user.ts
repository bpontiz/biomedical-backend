import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({database: "noteapp"})
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({length: 50})
    name: string = '';

    @Column({length: 50, unique: true})
    email: string = '';

    @Column({length: 100})
    password: string = '';

    @Column()
    permissions: string = '';
}