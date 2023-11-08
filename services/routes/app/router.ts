import { RepositoryPersister } from "../adapters/drivens/repository-persister";
import { Product } from "./schema/product";
import express, { IRouter } from 'express';
import { routes } from "./schema/routes";

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

    getAllProducts(): Promise<Product[] | null> {
        try{
            this.router.get(routes.allproducts, async (_,res) => {
                const getAll = await new ApiPersister().getProducts();
                res.status(200).json(getAll);
            })
            return null;
        }

        catch(error){
            console.log(`Cannot get all products when requiring ${routes.allproducts} path`, error)
            return null;
        }
    }
}