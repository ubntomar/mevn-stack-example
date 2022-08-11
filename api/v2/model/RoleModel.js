const mongoose= require("mongoose")

const ROLES=[ "user", "admin", "moderator" ]

const roleSchema= new mongoose.Schema({
    name: String
},
{
    versionKey: false
}
)

const Role=mongoose.model('roles',roleSchema)

module.exports={
    ROLES,
    Role
}