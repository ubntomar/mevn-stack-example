const { Task } = require('../model/TaskModel');

    const getAllTasks=async ()=> {
        const tasks = await Task.find( {} );
        return  tasks;
    }
    const createNewTask= async ( newTask )=>{
        const task= await new Task( newTask ).save()
        return task
    }
    const updateTask= async (req,res)=>{
        try {
            const filter={ _id: req.params.id }
            const update=req.body.tasks
            const updatedTask= await Task.findOneAndUpdate( filter, update, { new: true, useFindAndModify: false } )
            return updatedTask
        } catch (error) {
            throw{
                status: 500,
                message: `failed  DB operation update`
            }        
        }
    }
    const deleteTask= async (id)=>{
        try {
            const filter={ _id: id }
            return await Task.deleteOne(filter)
        } catch (error) {
            throw{
                status: 500,
                message: `failed  DB operation DELETE`
            }        
        }
    }

module.exports={
    getAllTasks,
    createNewTask,
    updateTask,
    deleteTask,
}    
