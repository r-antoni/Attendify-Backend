const express =  require('express')
const { create } = require('../Controllers/teacherController')

const router = express.Router();

router.post('/create/teacher', create)

module.exports = router