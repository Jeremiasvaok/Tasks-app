const { Router } = require('express')
const router = Router()
const {updateTasks} = require('../controller/index')

router.put('/:id', updateTasks)

module.exports = router