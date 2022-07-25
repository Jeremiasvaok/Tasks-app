const { Router } = require('express')
const router = Router()
const {createTasks} = require('../controller/index')

router.post('/', createTasks)

module.exports = router
