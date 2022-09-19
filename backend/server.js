const express = require('express');
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));