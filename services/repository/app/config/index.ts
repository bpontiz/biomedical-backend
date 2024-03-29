import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserModel } from '../model/user';
import 'dotenv/config';
import { ProductModel } from '../model/product';

const connection = async (): Promise<DataSource> => {
    const AppDataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "admin",
        synchronize: false,
        entities: [UserModel, ProductModel],
        logging: false,
    });

    try {
        await AppDataSource.initialize();
        await AppDataSource.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_DATABASE};`);
        await AppDataSource.synchronize();
        console.log('LOCAL DATABASE CONNECTED!');

        return AppDataSource;
    }

    catch (err) {
        console.log("Error during Data Source initialization", err);

        return AppDataSource;
    }

};

export const connectionConfig = connection();