"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drivers_1 = require("../adapters/drivers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8080;
app.get('/', (_, res) => {
    Promise.resolve(new drivers_1.ApiPersister().getUsers())
        .then(users => res.send(users));
});
app.get('/user', (_, res) => {
    Promise.resolve(new drivers_1.ApiPersister().getUser('argentina@afa.com.arr'))
        .then(user => res.send(user));
});
const URL = `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});
