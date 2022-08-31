const { User }= require("../model/UserModel")
const Role= require("../model/RoleModel")

const getAllUsers= async ()=>{
    const users=await  User.find({})
    return users
}

const createNewUser= async ( newUser )=>{
    const { name, username, password, email, roles } = newUser

    const rolesFound= await Role.find( {
        name: { $in: roles }        
    } )

    const userToSave={
        name,
        username,
        password,
        email,
        roles: rolesFound.map((role)=>role._id)
    }
    
    const user=await new User(userToSave).save()
    return user
}

const deleteUser= async (filter)=>{
    try {
        await User.deleteOne(filter)
    } catch (error) {
        throw{
            status: 500,
            message: `Failed deleting user ${filter} `
        }        
    }
    return
}

module.exports={
    getAllUsers,
    createNewUser,
    deleteUser
}