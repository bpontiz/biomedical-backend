import { routes } from './schema/routes';

export const userRoutes = {
    all:{
        method: 'GET',
        path: routes.users.allUsers
    },

    one:{
        method:'GET',
        path: routes.users.oneUser
    },

    create:{
        method: 'POST',
        path: routes.users.createUser
    },

    update:{
        method: 'PUT',
        path: routes.users.updateUser
    },

    delete:{
        method: 'DELETE',
        path: routes.users.deleteUser
    }
}