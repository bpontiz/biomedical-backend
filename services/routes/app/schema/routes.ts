export const routes = {
    users: {
        allUsers: `/users`,
        oneUser: `/users/:email`,
        createUser:`/createUser`,
        updateUser:`/updateUser/:email`,
        deleteUser:`/deleteUser/:email`,
    },

    products: {
        allProducts: `/products`,
        oneProduct: `/products/:id`,
        createProduct: `/createProduct`,
        updateProduct: `/updateProduct/:id`,
        deleteProduct: `/deleteProduct/:id`,
    },
}