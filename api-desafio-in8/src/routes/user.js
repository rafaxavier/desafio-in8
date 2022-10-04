const express = require('express');
const UserController = require('../controllers/UserController');
const geraId = require('../middlewares/geraID');

const user = express.Router();

user.get('/users', UserController.findAll);
user.post('/users',geraId, UserController.store);


module.exports = user;