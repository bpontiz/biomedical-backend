"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionConfig = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("../model/user");
require("dotenv/config");
const product_1 = require("../model/product");
const connection = async () => {
    const AppDataSource = new typeorm_1.DataSource({
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "admin",
        database: process.env.DB_DATABASE || "biomed",
        entities: [user_1.UserModel, product_1.ProductModel],
        synchronize: true,
        logging: false,
    });
    try {
        await AppDataSource.initialize();
        console.log('LOCAL DATABASE CONNECTED!');
        return AppDataSource;
    }
    catch (err) {
        console.log("Error during Data Source initialization", err);
        return AppDataSource;
    }
};
exports.connectionConfig = connection();
