const express = require('express');
const  logger  = require('../middleware/logger.js');
const { getUsers, createUser} = require('../controller/user');

const router = express.Router();
// const logger = require('../middleware/logger.js')

router.get('/getUsers', logger, getUsers);


router.post('/createUser', createUser);

module.exports = router;