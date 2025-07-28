const express =require("express")
const router=express.Router()
router.use(express.json())

const {singletask,
    alltasks,
    deletetask,
    updatetaskpatch,
    createtask}=require('../controller/controller.js')

//get all task
router.get('/',alltasks)

//get one task
router.get('/:id',singletask)

//post task
router.post('/',createtask)

//update task
router.patch('/:id',updatetaskpatch)

//delete task
router.delete('/:id',deletetask)

module.exports={router}