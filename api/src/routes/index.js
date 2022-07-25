const { Router } = require('express');
const routerGetTasks = require('./getTasks')
const routerGetTask = require('./getTask')
const routerUpdateTasks = require('./updateTasks')
const routerCreateTasks = require('./createTasks')
const routerDeleteTasks = require('./deleteTasks')
const router = Router();

router.use('/tasks', routerGetTasks)
router.use('/task', routerGetTask)
router.use('/tasks', routerUpdateTasks)
router.use('/tasks', routerCreateTasks)
router.use('/taskss', routerDeleteTasks)

module.exports = router