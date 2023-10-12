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

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});