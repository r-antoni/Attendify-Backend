const express =  require('express')
const { create} = require('../Controllers/studentController')

const router = express.Router();

router.post('/create', create)

module.exports = router