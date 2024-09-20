const express = require("express")
const router = express.Router()

// get it from the controller
const {createTodo} = require('../controller/createTodo')
const {getTodos, getTodoById} = require('../controller/getTodos')
const {updateTodo} = require('../controller/updateTodo')
const {deleteTodo} = require('../controller/deleteTodo')



// routes
router.post('/createTodo', createTodo)
router.get('/getTodos', getTodos)
router.get('/getTodos/:id', getTodoById)

router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router

