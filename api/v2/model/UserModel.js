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
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Role
        }
    ],
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

userSchema.statics.comparePassword= async (password, receivedPassword)=>{
    return await bcrypt.compare(password, receivedPassword)
}

userSchema.pre("save", async (next)=>{
    const user=this
    if(!user.isModified("password")){
        return next()
    }
    const salted= await bcrypt.genSalt(10)
    const hash=bcrypt.hash(user.password,salted)
    user.password=hash
    next()
})




const User= mongoose.model('users',userSchema)

module.exports={
    User
}