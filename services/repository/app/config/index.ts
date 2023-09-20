import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserModel } from '../model/user/user';
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_DATABASE || "test",
    entities: [UserModel],
    synchronize: true,
    logging: false,
});