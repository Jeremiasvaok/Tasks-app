const {Router} = require('express')
const router = Router()
const { deleteTasks } = require('../controller/index')

router.delete('/:id', deleteTasks)

module.exports = router