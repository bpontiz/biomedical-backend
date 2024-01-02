import express from 'express';

const app = express();

app.use(express.json());

const PORT = 8080;

const URL = `http://localhost:${PORT}`;

app.get('/', (_req,res) => {
    res.send('SERVER INITIALIZED! HELLO :D');
});

app.listen(PORT, () => {
    console.log(`✔ Server is running on ${URL}`);
});