import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserModel } from '../model/user/user';
import 'dotenv/config';

const connection = async (): Promise<DataSource> => {
    const AppDataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "admin",
        database: process.env.DB_DATABASE || "test",
        entities: [UserModel],
        synchronize: true,
        logging: false,
    });

    try {
        await AppDataSource.initialize();
        console.log('User DB CONNECTED!');

        return AppDataSource;
    }

    catch (err) {
        console.log("Error during Data Source initialization", err);

        return AppDataSource;
    }

};

export const connectionConfig = connection();