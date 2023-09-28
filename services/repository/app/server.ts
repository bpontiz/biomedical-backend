import express from 'express';
import { ApiPersister } from '../adapters/drivers';

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/', (_, res) => {
    const getUsers = new ApiPersister().getUsers();
    console.log(getUsers);
    res.send('HOLA')
});

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});