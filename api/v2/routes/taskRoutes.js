const express= require("express")
const router=express.Router()
const taskController=require("../controllers/taskController")


router.get("/",taskController.getAllTasks)
router.post("/",taskController.createNewTask)
router.put("/:id",taskController.updateTask)
router.delete("/:id",taskController.deleteTask)




module.exports=router

