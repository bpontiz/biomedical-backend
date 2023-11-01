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
    Promise.resolve(new drivers_1.ApiPersister().getProducts())
        .then(products => res.send(products));
});
app.get('/:name/:id', (req, res) => {
    const { name, id } = req.params;
    const idToNumber = parseInt(id);
    Promise.resolve(new drivers_1.ApiPersister().getProduct(name, idToNumber))
        .then(product => res.send(product));
});
app.post('/', (req, res) => {
    const product = req.body;
    Promise.resolve(new drivers_1.ApiPersister().createProduct(product))
        .then(prod => res.send(prod));
});
app.put('/', (req, res) => {
    const user = req.body;
    Promise.resolve(new drivers_1.ApiPersister().updateUser(user.email, user))
        .then(u => res.send(u));
});
const URL = `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});
