const express = require('express')
const chirpsRoute = require('./users')
const chirpsRouter = express.Router()

chirpsRouter.use('/users', chirpsRouter);

module.exports = chirpsRouter;