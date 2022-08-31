const {ROLE,Role}=require("../model/RoleModel")

getAllRoles= async ()=>{
    const roles= await Role.find({})
    return roles
}

createNewRol= async (role)=>{
    const createdRole= await Role.save(role)
    return createdRole
}

module.exports={
    getAllRoles,
    createNewRol
}