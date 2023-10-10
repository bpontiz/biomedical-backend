const express = require('express');
const router = require("./routes/index.js");

const app = express();
const PORT = 3000;

// ROUTES
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Online! http://localhost:${PORT}/home`);
});