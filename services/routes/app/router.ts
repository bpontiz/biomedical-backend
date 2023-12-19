import { RepositoryPersister } from "../adapters/drivens/repository-persister";
import { Product } from "./schema/product";
import express, { IRouter } from 'express';
import { routes } from "./schema/routes";
import { Users } from "./schema/user";

const mockProductsArray = [
    {
        id: 47,
        name: 'Desfribilador',
        serie: 'KT-4',
        status: 'Repairing',
        last_service: '06/11/03',
        next_service: '06/12/03',
        description: 'Machine',
        timestamp: '06/11/03 : 15:40:23',
    },
    {
        id: 48,
        name: 'XRAY',
        serie: 'ZJ',
        status: 'Available',
        last_service: '06/11/03',
        next_service: '06/12/03',
        description: 'Machine',
        timestamp: '06/11/03 : 16:40:23',
    }
];

const mockFunctions = async () => {
    return mockProductsArray;
};

export class Router implements RepositoryPersister {
    constructor(private router: express.Router) {
        this.router = express.Router();
    }

    async getAllProducts(): Promise< Product[] | null > {
        try{
            this.router.get(routes.allproducts, async (_,res) => {
                const getAll = await new ApiPersister().getAllProducts();
                res.status(200).json(getAll);
            })
            return null;
        }

        catch(error){
            console.log(`Cannot get all products when requiring ${routes.allproducts} path`, error)
            return null;
        }
    }

    async getOneProduct(id: number): Promise<Product | null> {
        try{
            this.router.get(routes.oneproduct, async (_,res) => {
                const getOne = await new ApiPersister().getOneProduct(id);
                res.status(200).json(getOne);
            })
            return null;
        }

        catch(error){
            console.log(`Cannot get the product whe you require ${routes.oneproduct} path`, error)
            return null;
        }
    }

    async createProduct(id: number): Promise<Product | null> {
        try{
            this.router.post(routes.createproduct, async (_,res) => {
                const newProduct = await new ApiPersister().createProductById(id);
                res.status(201).json(newProduct)
            })
            return null;
        } catch (error) {
            console.log(`The product cannot be created in the route ${routes.createproduct}`, error);
            return null
        }
    }

    async deleteProduct(id: number): Promise<boolean> {
        try{
            const deleteProduct = await new ApiPersister().deleteProductById(id);
            
            this.router.delete(routes.deleteproduct, async (_,res) => {
                if(deleteProduct){
                    res.status(200).json({message: `product seccessfully deleted`});
                } else {
                    res.status(404).json({message:`product not found`})
                }
            });
            return !!deleteProduct;
        } catch (error) {
            console.log(`The product could not be deleted from the route ${routes.deleteproduct}`, error)
            return false;
        }
    }

    async updateProduct(id: number, name: string, serie: string, status: string,  description: string): Promise<Product | null> {
        try {
            const updateProduct = await new ApiPersister().updateProductDetails(id, {name, serie, status, description});
            this.router.put(routes.updateproduct, async(_,res) => {
            res.status(200).json(updateProduct);
            });
            return updateProduct;
        } catch (error) {
            console.log(`Inable to update the product on the route ${routes.updateproduct}`, error);
            return null;
        }
    }

    async getAllUsers(): Promise<Users[] | null> {
        try{
            this.router.get(routes.allusers, async (_,res) => {
                const getAll = await new ApiPersister().getAllUsers();
                res.status(200).json(getAll);
            })
            return null;
        }

        catch(error) {
            console.log(`All users could not be found ${routes.allusers} path`, error)
            return null;
        }
    }

    async getOneUsers(id: number): Promise< Users | null > {
        try{
            this.router.get(routes.oneusers, async (_,res) => {
                const getOne = await new ApiPersister().getOneUsers(id);
                res.status(200).json(getOne);
            })
            return null;
        }
        catch(error) {
            console.log(`One users could not be found ${routes.oneusers}`, error)
            return null
        }
    }

    async createUser(id: number, name: string, surname: string, email: string, age: number): Promise< Users | null > {
        try {
            const newuser = await new ApiPersister().createUserWithDetails({id, name, surname, email, age});
            this.router.post(routes.createuser, async (_,res) => {
                res.status(201).json(newuser);
            });

            return newuser;
        } catch (error) {
            console.log(`The user could not be created in the path ${routes.createuser}`, error);
            return null;
        }
    }

    async updateUser(id: number, name:string, surname: string, email: string, age: string): Promise< Users | null > {
        try {
            const updatedUser = await new ApiPersister().createUserWithDetails({id, name, surname, email, age});
            this.router.put(routes.updateuser, async (_,res) => {
                res.status(200).json(updatedUser);
            });
            return updatedUser;
        }catch (error) {
            console.log(`Could not update user in path ${routes.updateuser}`, error);
            return null;
        }
    }

    async deleteUser(id: number): Promise<boolean> {
        try {
            const deletedUser = await new ApiPersister().deleteUserById(id);
            this.router.delete(routes.deleteuser, async (_, res) => {
                if (deletedUser) {
                    res.status(200).json({ message: `User successfully deleted` });
                } else {
                    res.status(404).json({ message: `User not found` });
                }
            });
            return !!deletedUser;
        } catch (error) {
            console.log(`The user could not be deleted from the route ${routes.deleteuser}`, error);
            return false;
        }
    }
}