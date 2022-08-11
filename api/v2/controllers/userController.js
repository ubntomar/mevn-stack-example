const userService= require("../services/userService")

const getAllUsers= async ( req, res )=>{
    const allUsers=await userService.getAllUsers()
    return res.status(201).send(allUsers)
     
}

const createNewUser= async ( req, res )=>{
    const {name,username}=req.body.user
    if(!(name && username)){
        return res.status(400).send( { message: "Failed username || password" } )
        }
    
    try {
        const newUser=await userService.createNewUser(req.body.user)
        return res.status(201).send( { "message" : newUser } )
        
    } catch (error) {
        return res.status(error.status).send({message: error}) 
        }
    
}

const deleteUser= async (req,res)=>{
    const filter={
        _id:req.params.id
    }
    try {
        await userService.deleteUser(filter)
        return res.status(201).send( { message: "Deleted succesful" } )
    } catch (error) {
        return res.status(error.status).send({message: error.message })
    }
}

module.exports={
    getAllUsers,
    createNewUser,
    deleteUser,
}