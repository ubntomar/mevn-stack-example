const taskService= require("../services/taskService")

const getAllTasks=async(req,res)=>{
    const allTasks= await taskService.getAllTasks()

    res.status(200).send({"payload":allTasks})
}

const createNewTask= (req,res)=>{
    res.send("i am the file that creat controller")
}


module.exports={
    getAllTasks,
    createNewTask
}

