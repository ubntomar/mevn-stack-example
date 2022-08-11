const mongoose= require("mongoose")
const bcrypt= require("bcryptjs")

const userSchema= new mongoose.Schema({
    username: { 
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    name: String,
    createDate: Date,
    updatedDate: Date,
    createBy: String,
    updatedBy: String,
},
{
    timestamps:{
        createDate: 'create_at',
        updatedDate: 'update_at'
    }
}
)

userSchema.statics.encryptPassword= async (password)=>{
    const salted= await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salted)
}


const User= mongoose.model('users',userSchema)

module.exports={
    User
}