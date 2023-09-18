const express =  require('express')
const { absenceapp, accept } = require('../Controllers/absenceController')

const router = express.Router();

router.post('/create', absenceapp)
router.post('/accept', accept)

module.exports = router