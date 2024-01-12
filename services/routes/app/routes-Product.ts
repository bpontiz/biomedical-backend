import { routes } from './schema/routes';

export const productRoutes = {
    all:{
        method: 'GET',
        path: routes.products.allProducts,
    },

    one: {
        method: 'GET',
        path: routes.products.oneProduct,
    },

    create:{
        method: 'POST',
        path: routes.products.createProduct,
    },

    update:{
        method: 'PUT',
        path: routes.products.updateProduct,
    },

    delete: {
        method: 'DELETE',
        path: routes.products.deleteProduct
    }
}