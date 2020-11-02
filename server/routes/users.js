const express = require('express');
const chirpStore = require('../chirpstore');
const usersRouter = express.Router();

/*
ONE USER BY ID
ALL USERS
http://localhost:3000/api/users/1
*/

usersRouter.get('/:userid', (req, res) => {
    res.json('One user for: ' + req.params.userid)
});

/*
ALL USERS
http://localhost:3000/api/users
*/

usersRouter.get('/', (req, res) => {
    res.json('All users')
});

/*
CREATE USER BY ID
http://localhost:3000/api/users/
*/

usersRouter.post('/', (req,res) => {
    console.log(req.body); //info filled out in a form
    res.json('Test post')
});

/*
EDIT USER BY ID
http://localhost:3000/api/users/1
*/

usersRouter.put('/:userid', (req,res) => {
    res.json('Edit User' + req.params.userid)
});

/*
DELETE USER BY ID
http://localhost:3000/api/users/1
*/

usersRouter.delete('/:userid', (req,res) => {
    res.json('Kill user' + req.params.userid)
});


module.exports = usersRouter