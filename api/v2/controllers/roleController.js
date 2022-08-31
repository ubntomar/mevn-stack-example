const roleService= require("../services/rolService")


const getAllRoles= async (req,res)=>{
    const allRoles= await roleService.getAllRoles()
    return res.send(allRoles)
}

const createNewRol= async (req,res)=>{
    const newRol=req.body.role
    const createdRole= await roleService.createNewRol(newRol)
    return res.send(createdRole)
}

module.exports={
    getAllRoles,
    createNewRol
}