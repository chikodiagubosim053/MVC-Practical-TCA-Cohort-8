const express = require('express');

const router = express.Router();
const { getUsers, createUser} = require('../controller/user');
const logger = require('../middleware/logger.js')

router.get('/getUsers', getUsers);


router.post('/createUser', createUser);

module.exports = router;