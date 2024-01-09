"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./services/routes/app/schema/routes");
const router_1 = require("./services/routes/app/router");
const app = (0, express_1.default)();
const router = new router_1.Router();
app.use(express_1.default.json());
const PORT = 8080;
const URL = `http://localhost:${PORT}`;
app.get('/', (_req, res) => {
    res.send('SERVER INITIALIZED! HELLO :D');
});
//Products
app.get(routes_1.routes.allProducts, async (_req, res) => {
    const products = await router.getProducts();
    if (products) {
        res.json(products);
    }
    else {
        res.status(500).json({ error: `Error in obtaining the products` });
    }
});
app.get(routes_1.routes.oneProduct, async (req, res) => {
    const productId = parseInt(req.params.id);
    const product = await router.getProduct(productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: `Product not found` });
    }
});
app.post(routes_1.routes.createProduct, async (req, res) => {
    try {
        const { name, serie, status, last_service, next_service, description, timestamp } = req.body;
        const newProduct = { name, serie, status, last_service, next_service, description, timestamp };
        const createdProduct = await router.createProduct(newProduct);
        if (createdProduct) {
            res.status(201).json(createdProduct);
        }
        else {
            res.status(500).json({ error: `Error when creating the product` });
        }
    }
    catch (error) {
        res.status(500).json({ error: `Error in the application` });
    }
});
app.put(routes_1.routes.updateProduct, async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const { name, serie, status, last_service, next_service, description, timestamp } = req.body;
        const updatedProduct = { name, serie, status, last_service, next_service, description, timestamp };
        const updated = await router.updateProduct(productId, updatedProduct);
        if (updated) {
            res.json(updated);
        }
        else {
            res.status(500).json({ error: `Product error` });
        }
    }
    catch (error) {
        res.status(500).json({ error: `Error in the application` });
    }
});
app.delete(routes_1.routes.deleteProduct, async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const deletedProduct = await router.deleteProduct(productId);
        if (deletedProduct) {
            res.json(deletedProduct);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error in the application' });
    }
});
//users
app.get(routes_1.routes.allUsers, async (_req, res) => {
    try {
        const users = await router.getUsers();
        if (users) {
            res.json(users);
        }
        else {
            res.status(404).json({ error: 'Not found the users' });
        }
    }
    catch (error) {
        res.status(500).json({ error: `Error in the application` });
    }
});
app.get(routes_1.routes.oneUser, async (req, res) => {
    try {
        const userEmail = req.body.email;
        const user = await router.getUser(userEmail);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: `Error in the application` });
    }
    ;
});
app.post(routes_1.routes.createUser, async (req, res) => {
    try {
        const { id, name, email, password } = req.body;
        const newUser = { id, name, email, password };
        const createdUser = await router.createUser(newUser);
        if (createdUser) {
            res.status(201).json(createdUser);
        }
        else {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error en la solicitud' });
    }
});
app.put(routes_1.routes.updateUser, async (req, res) => {
    try {
        const userEmail = req.params.email;
        const { id, name, email, password } = req.body;
        const updatedUser = {
            id,
            name,
            email,
            password
        };
        const updated = await router.updateUser(userEmail, updatedUser);
        if (updated) {
            res.json(updated);
        }
        else {
            res.status(404).json({ error: `User not found` });
        }
    }
    catch (error) {
        res.status(500).json({ error: `Error in the application` });
    }
});
app.delete(routes_1.routes.deleteUser, async (req, res) => {
    try {
        const userEmail = req.params.email;
        const deletedUser = await router.deleteUser(userEmail);
        if (deletedUser) {
            res.json(deletedUser);
        }
        else {
            res.status(404).json({ error: `User not found` });
        }
    }
    catch (error) {
        res.status(500).json({ error: `Error in the application` });
    }
});
app.listen(PORT, () => {
    console.log(`✔ Server is running on ${URL}`);
});
