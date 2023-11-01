import express from 'express';
import { ApiPersister } from '../adapters/drivers';

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/', (_, res) => {
    Promise.resolve(new ApiPersister().getProducts())
        .then(products => res.send(products));
});

app.get('/:id', (req, res) => {
    const {id} = req.params;
    const idToNumber = parseInt(id);
    Promise.resolve(new ApiPersister().getProduct(idToNumber))
        .then(product => res.send(product));
});

app.post('/', (req, res) => {
    const product = req.body;
    Promise.resolve(new ApiPersister().createProduct(product))
        .then(prod => res.send(prod));
});

app.put('/', (req, res) => {
    const user = req.body;
    Promise.resolve(new ApiPersister().updateUser(user.email, user))
        .then(u => res.send(u))
});

app.put('/:id', (req, res) => {
    const {id} = req.params;
    const idToNumber = Number(id);
    const prod = req.body;
    Promise.resolve(new ApiPersister().updateProduct(idToNumber, prod))
        .then(u => res.send(u))
});

app.delete('/:id', (req, res) => {
    const {id} = req.params;
    const idToNumber = parseInt(id);
    Promise.resolve(new ApiPersister().deleteProduct(idToNumber))
        .then(u => res.send(u))
});

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}.`);
});