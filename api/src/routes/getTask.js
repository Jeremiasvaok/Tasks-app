const { Router } = require('express')
const router = Router()
const {getTask} = require('../controller/index')

router.get('/:id', getTask)

module.exports = router;