// import { Router as RouterHEX } from "../../app/router";
import { Router } from "../../app/router";
import { ForRouting } from "../../ports/drivers/for-routing";
import { Router as RouterModule } from "express";
import { userRoutes } from "../../app/routes-User";
import { productRoutes } from "../../app/routes-Product"

export class FrontRouter implements ForRouting {
    constructor() {}

    appRouter(): RouterModule {
        const router = RouterModule();
        const routerInstance = new Router();

        // Users
        router.route(userRoutes.all.path).get(async(_req, res) => {
            try {
                const allUsers = await routerInstance.getUsers();
                res.send(allUsers)
            } catch(error) {
                res.status(500).send('Internal Server Error');
            }
        })

        router.route(userRoutes.one.path).get(async(req, res) => {
            try {
                const { email } = req.params; // Puedes obtener el parámetro de la URL
                const user = await routerInstance.getUser(email);
                if (user) {
                    res.send(user);
                } else {
                    res.status(404).send('User not found');
                }
            } catch (error) {
                res.status(500).send('Internal Server Error');
            }
        });

        router.route(userRoutes.create.path).post(async(req, res) => {
            try{
                const newUser = req.body;
                const createdUser = await routerInstance.createUser(newUser);
                    if(createdUser) {
                        res.status(201).send(createdUser);
                    } else {
                        res.status(500).send(`Failed to create user`)
                    }
            } catch (error) {
                res.status(500).send(`Internal Server Error`);
            }
        });

        router.route(userRoutes.update.path).put(async(req, res) => {
            try {
                const { email } = req.params;
                const updatedUser = req.body;
                const resultUser = await routerInstance.updateUser(email, updatedUser)
                    if(resultUser) {
                        res.send(resultUser);
                    } else {
                        res.status(404).send(`User not found`);
                    }
            } catch(error) {
                res.status(500).send(`Internal Server Error`);
            }
        });

        router.route(userRoutes.delete.path).delete(async (req, res) => {
            try {
                const { email } = req.params;
                const deletedUser = await routerInstance.deleteUser(email);
                    if (deletedUser) {
                        res.send(deletedUser)
                    } else {
                        res.status(404).send(`User not found`)
                    }
            } catch (error) {
                res.status(500).send(`Internal Server Error`);
            }
        });

        // Products
        router.route(productRoutes.all.path).get(async(_req, res) => {
            try {
                const allProducts = await routerInstance.getProducts();
                res.send(allProducts)
            } catch (error) {
                res.status(500).send(`Internal Server Error`);
            }
        });

        router.route(productRoutes.one.path).get(async(req, res) => {
            try {
                const { id } = req.params;
                const productId = parseInt(id)
                const product = await routerInstance.getProduct(productId)
                if(product) {
                    res.send(product);
                } else {
                    res.status(404).send(`Product not found`);
                }
            } catch (error) {
                res.status(500).send(`Internal Server Error`);
            }
        });

        router.route(productRoutes.create.path).post(async(req, res) => {
            try{
                const newProduct = req.body;
                const createdProduct = await routerInstance.createProduct(newProduct);
                    if(createdProduct) {
                        res.status(201).send(createdProduct)
                    } else {
                        res.status(404).send(`Product not found`)
                    }
            } catch (error) {
                res.status(500).send(`Internal Server Error`)
            }
        });

        router.route(productRoutes.update.path).put(async(req, res) => {
            try {
                const { id } = req.params;
                const productId = parseInt(id);
                const updateProductData = req.body;
                const updatedProduct = await routerInstance.updateProduct(productId, updateProductData);
                    if (updatedProduct){
                        res.send(updatedProduct);
                    } else {
                        res.status(404).send(`Product not found`)
                    }
            }catch (error) {
                res.status(500).send(`Internal Server Error`)
            }
        });

        router.route(productRoutes.delete.path).delete(async(req, res) => {
            try{
                const { id } = req.params;
                const productId = parseInt(id);
                const deletedProduct = await routerInstance.deleteProduct(productId);
                    if(deletedProduct) {
                        res.send(deletedProduct)
                    } else {
                        res.status(404).send(`Product not found`)
                    }
            }catch (error) {
                res.status(500).send(`Internal Server Error`)
            }
        });

        return router;
    }
}

/*
    appRouter(): RouterModule {
        const appRouterInstance = RouterModule();
        return appRouterInstance.get('/users', new Router().getUsers);
    }
*/