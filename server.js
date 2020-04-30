const express = require('express');
const router = require('./src/router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, err => {
    if (err) throw new Error(err);
    else console.log(`Server running at ${ port }.`);
});