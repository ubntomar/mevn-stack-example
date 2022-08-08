const taskService= require("../services/taskService")

const getAllTasks=async(req,res)=>{
    const allTasks= await taskService.getAllTasks()
    res.status(200).send({"payload":allTasks})
}

const createNewTask=async (req,res)=>{
    const newTask=await taskService.createNewTask(req.body.tasks)
    res.status(201).send( { message: newTask } )
}

const updateTask= async (req,res)=>{
    if(req.params.id){
        try {
            const updatedTask=await taskService.updateTask(req,res)
            res.status(201).send( {  message:updatedTask } )
        } catch (error) {
            res.status(error.status).send( { message: error.message } )        
        }
    }else{
        req.status(400).send( { message: "Id param is missing" } )
    }
}
const deleteTask= async (req,res)=>{
    if(req.params.id){
        try {
            const message= await taskService.deleteTask(req.params.id)
            if(!message.deletedCount)
                throw { status:400 , message: "Object don't exist" }
            res.status(200).send( {  message: "Deleted O.K" } )
        } catch (error) {
            res.status(error.status).send( { message: error.message } )        
        }
    }else{
        req.status(400).send( { message: "Id param is missing" } )
    }
}

module.exports={
    getAllTasks,
    createNewTask,
    updateTask,
    deleteTask
}

