const mongoose= require("mongoose")


const userSchema= new mongoose.Schema({
    name: 'string',
    username: 'string',
    createDate: 'date',
    updatedDate: 'date',
    createBy: 'string',
    updatedBy: 'string',
},
{
    timestamps:{
        createDate: 'create_at',
        updatedDate: 'update_at'
    }
}
)

const User= mongoose.model('users',userSchema)

module.exports={
    User
}