import express from 'express';
import { routes } from './services/routes/app/schema/routes';
import { Router } from './services/routes/app/router';
import { Product } from './services/api/app/schemas/product';
import { User } from './services/repository/app/schemas/user';
import { connectionConfig } from './services/repository/app/config';

const app = express();
const router = new Router()

app.use(express.json());

const PORT = 8080;

const URL = `http://localhost:${PORT}`;

app.get('/', (_req,res) => {
    connectionConfig;
    res.send('SERVER INITIALIZED! HELLO :D');
});

    //Products

app.get(routes.allProducts, async (_req, res) => {
    const products = await router.getProducts();
    if(products) {
        res.json(products)
    } else {
        res.status(500).json({error: `Error in obtaining the products`});
    }
});

app.get(routes.oneProduct, async (req,res) => {
    const productId = parseInt(req.params.id);
    const product = await router.getProduct(productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({error: `Product not found`})
    }
});

app.post(routes.createProduct, async (req,res) => {
    try {
        const {name, serie, status, last_service, next_service, description, timestamp} = req.body;
        const newProduct: Product = {name, serie, status, last_service, next_service, description, timestamp};
    const createdProduct = await router.createProduct(newProduct);

    if(createdProduct) {
        res.status(201).json(createdProduct);
    } else {
        res.status(500).json({ error: `Error when creating the product` })
    }
    } catch (error) {
        res.status(500).json({ error: `Error in the application`})
    }
});

app.put(routes.updateProduct, async (req, res) => {
    try {
        const productId = parseInt(req.params.id)
            const { name, serie, status, last_service, next_service, description, timestamp } = req.body;
            const updatedProduct: Product = {name, serie, status, last_service, next_service, description, timestamp};
            const updated = await router.updateProduct(productId, updatedProduct);

            if(updated) {
                res.json(updated);
            } else {
                res.status(500).json({ error: `Product error`})
            }
    } catch (error) {
        res.status(500).json({ error: `Error in the application`})
    }
});

app.delete(routes.deleteProduct, async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const deletedProduct = await router.deleteProduct(productId);

        if (deletedProduct) {
            res.json(deletedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error in the application' });
    }
});

    //users

app.get(routes.allUsers, async(_req, res) => {
        try {
            const users: User[] | null = await router.getUsers();
            if(users) {
                res.json(users);
            } else {
                res.status(404).json({ error: 'Not found the users'})
            }
        } catch (error) {
            res.status(500).json({ error: `Error in the application`})
        }
});

app.get(routes.oneUser, async (req, res) => {
    try {
        const userEmail = req.body.email;
        const user: User | null = await router.getUser(userEmail);
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: `Error in the application`});
    };
});

app.post(routes.createUser, async (req, res) => {
    try {
        const { id, name, email, password, permissions } = req.body;
        const newUser: User = {id, name, email, password, permissions};
        const createdUser: User | null = await router.createUser(newUser);
        if (createdUser) {
            res.status(201).json(createdUser);
        } else {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en la solicitud' });
    }
});

app.put(routes.updateUser, async (req, res) => {
    try {
        const userEmail = req.params.email;
        const {id, name, email, password, permissions } = req.body;

        const updatedUser: User = {
            id,
            name,
            email,
            password,
            permissions
        };
        const updated: User | null = await router.updateUser(userEmail, updatedUser)

        if(updated) {
            res.json(updated);
        } else {
            res.status(404).json({error: `User not found`})
        }
    } catch (error) {
        res.status(500).json({error: `Error in the application`})
    }
});

app.delete(routes.deleteUser, async (req, res) => {
    try {
        const userEmail = req.params.email;
        const deletedUser = await router.deleteUser(userEmail);
        if(deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ error: `User not found`})
        }
    } catch (error) {
        res.status(500).json({ error: `Error in the application` })
    }
});

app.listen(PORT, () => {
    console.log(`✔ Server is running on ${URL}`);
});