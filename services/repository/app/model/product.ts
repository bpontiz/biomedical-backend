import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import 'dotenv/config';
import { Status } from "../schemas/product";
@Entity({database: process.env.DB_DATABASE})
export class ProductModel {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({length: 100})
    name: string = '';

    @Column({length: 50, })
    serie: string = '';

    @Column({length: 25})
    status: Status = 'Available';

    @Column({length: 50})
    last_service: string = '';

    @Column({length: 50})
    next_service: string = '';

    @Column({length: 1000})
    description: string = '';

    @Column({length: 100})
    timestamp: string = '';
}