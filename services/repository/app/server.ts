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
    const user = req.body;
    Promise.resolve(new ApiPersister().createUser(user))
        .then(u => res.send(u));
})

app.put('/', (req, res) => {
    const user = req.body;
    Promise.resolve(new ApiPersister().updateUser(user.email, user))
        .then(u => res.send(u))
});

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});