const { Router } = require('express')
const router = Router()
const {getTasks} = require('../controller/index')

router.get('/', getTasks)

module.exports = router;