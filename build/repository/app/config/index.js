"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDb = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("../model/user/user");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_DATABASE || "test",
    entities: [user_1.UserModel],
    synchronize: true,
    logging: false,
});
AppDataSource.initialize();
exports.UserDb = AppDataSource.getRepository(user_1.UserModel);
console.log('User DB CONNECTED!');
