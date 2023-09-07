const express =  require('express')
const { register } = require('../Controllers/UserController')

const router = express.Router();

router.post('/register', register)

module.exports = router