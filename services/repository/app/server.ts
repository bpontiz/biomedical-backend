import express from 'express';
import { ApiPersister } from '../adapters/drivers';

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/', (_, res) => {
    Promise.resolve(new ApiPersister().getUsers())
        .then(users => res.send(users));
    
});

app.get('/user', (_, res) => {
    Promise.resolve(new ApiPersister().getUser('argentina@afa.com.arr'))
        .then(user => res.send(user));
    
});

app.post('/', (req, res) => {
    const userToBeAdded = req.body;
    Promise.resolve(new ApiPersister().createUser(userToBeAdded))
        .then(createdUser => res.send(createdUser));
    
});

app.put('/', (req, res) => {
    const userToBeUpdated = req.body;
    Promise.resolve(new ApiPersister().updateUser('man@city.com.en', userToBeUpdated))
        .then(updatedUser => res.send(updatedUser));
    
});

app.delete('/', (req, res) => {
    const userToBeDeleted = req.body.email;
    Promise.resolve(new ApiPersister().deleteUser(userToBeDeleted))
        .then(deletedUser => res.send(deletedUser));
    
});

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});