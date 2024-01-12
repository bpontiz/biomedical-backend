import express from 'express';
import { FrontRouter } from './services/routes/adapters/drivers/front-router';

const app = express();

app.use(express.json());

const PORT = 8080;

const URL = `http://localhost:${PORT}`;

app.use('/', new FrontRouter().appRouter());

app.listen(PORT, () => {
    console.log(`✔ Server is running on ${URL}`);
});