const { connect, disconnect } = require('../database/dbConfig');
const { Task } = require('../model/taskModel');

connect()

    const getAllTasks=async ()=> {
        const tasks = await Task.find({});
        return  tasks;
    }

module.exports={
    getAllTasks
}    
