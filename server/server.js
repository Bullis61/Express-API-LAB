const express = require("express");
const cors = require('cors');
const apiRouter = require('./routes');
const app = express();
const path = require("path");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/server/chirpstore', apiRouter);


app.listen(3000, () => {
    console.log('server running at port 3000!')
});